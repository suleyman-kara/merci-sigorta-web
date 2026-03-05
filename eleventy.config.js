import { minify } from "html-minifier-terser";
import CleanCSS from "clean-css";
import Image from "@11ty/eleventy-img";
import path from "path";

export default function (eleventyConfig) {
    /* ── Passthrough copies ── */
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/img/favicon.ico");

    /* ── CSS Minification Filter ── */
    eleventyConfig.addFilter("cssmin", function (code) {
        if (process.env.NODE_ENV === "production") {
            return new CleanCSS({}).minify(code).styles;
        }
        return code;
    });

    /* ── Image Shortcode ── */
    eleventyConfig.addShortcode(
        "image",
        async function (src, alt, sizes = "100vw", loading = "lazy") {
            const inputPath = path.join("src", src);

            const metadata = await Image(inputPath, {
                widths: [320, 640, 1024, 1400],
                formats: ["avif", "webp"],
                outputDir: "./docs/img/",
                urlPath: "/img/",
                filenameFormat: function (id, src, width, format) {
                    const name = path.basename(src, path.extname(src));
                    return `${name}-${width}w.${format}`;
                },
                cacheOptions: {
                    duration: "1y",
                },
            });

            const imageAttributes = {
                alt,
                sizes,
                loading,
                decoding: loading === "eager" ? "auto" : "async",
            };

            if (loading === "eager") {
                imageAttributes.fetchpriority = "high";
            }

            return Image.generateHTML(metadata, imageAttributes);
        }
    );

    /* ── Logo Image Shortcode (smaller widths) ── */
    eleventyConfig.addShortcode(
        "logoImage",
        async function (src, alt, sizes = "(max-width: 768px) 200px, 346px") {
            const inputPath = path.join("src", src);

            const metadata = await Image(inputPath, {
                widths: [200, 400, 700],
                formats: ["avif", "webp"],
                outputDir: "./docs/img/",
                urlPath: "/img/",
                filenameFormat: function (id, src, width, format) {
                    const name = path.basename(src, path.extname(src));
                    return `${name}-${width}w.${format}`;
                },
                cacheOptions: {
                    duration: "1y",
                },
            });

            const imageAttributes = {
                alt,
                sizes,
                loading: "eager",
                decoding: "auto",
                fetchpriority: "high",
            };

            return Image.generateHTML(metadata, imageAttributes);
        }
    );

    /* ── HTML Minification Transform (production only) ── */
    eleventyConfig.addTransform("htmlmin", async function (content) {
        if (
            process.env.NODE_ENV === "production" &&
            (this.page.outputPath || "").endsWith(".html")
        ) {
            return await minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
            });
        }
        return content;
    });

    /* ── Config ── */
    return {
        dir: {
            input: "src",
            output: "docs",
            includes: "_includes",
            data: "_data",
        },
        templateFormats: ["njk", "md", "html"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    };
}
