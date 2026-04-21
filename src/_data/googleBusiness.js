import EleventyFetch from "@11ty/eleventy-fetch";
import dotenv from "dotenv";

dotenv.config();

export default async function () {
    const apiKey = process.env.GOOGLE_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        console.warn("⚠️ Google API Key or Place ID is missing in .env file. Returning empty Google Business data.");
        return { rating: 0, userRatingCount: 0 };
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
                    "X-Goog-FieldMask": "id,rating,userRatingCount,googleMapsUri",
                    "Referer": "https://www.mercisigorta.com"
                }
            }
        });

        const now = new Date();
        const formattedDate = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()}`;

        return {
            rating: Number(json.rating || 0).toFixed(1),
            userRatingCount: json.userRatingCount || 0,
            lastUpdate: formattedDate,
            url: json.googleMapsUri || `https://www.google.com/maps/place/?q=place_id:${placeId}`
        };
    } catch (error) {
        console.error("❌ Error fetching Google Business data:", error.message);
        return { rating: 0, userRatingCount: 0 };
    }
}
