import EleventyFetch from "@11ty/eleventy-fetch";
import dotenv from "dotenv";

dotenv.config();

export default async function () {
    const apiKey = process.env.GOOGLE_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        console.warn("⚠️ Google API Key or Place ID is missing in .env file. Returning empty Google Business data.");
        return { rating: 0, userRatingCount: 0, reviews: [], photos: [] };
    }

    try {
        const url = `https://places.googleapis.com/v1/places/${placeId}`;
        
        // Use Eleventy Fetch to cache the API response
        let json = await EleventyFetch(url, {
            duration: "1d", // Cache for 1 day
            type: "json",    // Parse it as JSON
            fetchOptions: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": apiKey,
                    "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,reviews,photos,googleMapsUri",
                    "Referer": "https://www.mercisigorta.com"
                }
            }
        });

        // Add a fallback photo base URL
        const processPhotoUrl = async (photoName) => {
            const mediaUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=800&maxWidthPx=800&skipHttpRedirect=true&key=${apiKey}`;
            try {
                let mediaJson = await EleventyFetch(mediaUrl, {
                    duration: "1d",
                    type: "json",
                    fetchOptions: {
                        method: "GET",
                        headers: { "Referer": "https://www.mercisigorta.com" }
                    }
                });
                return mediaJson.photoUri;
            } catch (err) {
                console.error("Failed to fetch photo URI:", err);
                return "";
            }
        };

        let photos = [];
        if (json.photos) {
            const slicedPhotos = json.photos.slice(0, 4);
            const photoUrls = await Promise.all(slicedPhotos.map(p => processPhotoUrl(p.name)));
            photos = photoUrls.map(url => ({ url })).filter(p => p.url);
        }

        const now = new Date();
        const formattedDate = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()}`;

        const processedData = {
            rating: Number(json.rating || 0).toFixed(1),
            userRatingCount: json.userRatingCount || 0,
            lastUpdate: formattedDate,
            url: json.googleMapsUri || `https://www.google.com/maps/place/?q=place_id:${placeId}`,
            reviews: json.reviews ? json.reviews.slice(0, 5).map(review => ({
                authorName: review.authorAttribution?.displayName || "Anonymous",
                authorPhoto: review.authorAttribution?.photoUri || "",
                rating: review.rating,
                relativeTime: review.relativePublishTimeDescription,
                text: review.originalText?.text || review.text?.text || "",
                language: review.originalText?.languageCode || review.text?.languageCode || "tr"
            })) : [],
            photos
        };

        return processedData;
    } catch (error) {
        console.error("❌ Error fetching Google Business data:", error.message);
        return { rating: 0, userRatingCount: 0, reviews: [], photos: [] };
    }
}
