// Site settings. You should rarely need to touch this file.

const pad = (n) => String(n).padStart(2, "0");

export default function (eleventyConfig) {
  // Copy the stylesheet straight through to the finished site.
  eleventyConfig.addPassthroughCopy("css");

  // All entries live in /entries, newest first.
  eleventyConfig.addCollection("entries", (api) =>
    api.getFilteredByGlob("entries/*.md").sort((a, b) => b.date - a.date)
  );

  // 2026·10·12
  eleventyConfig.addFilter("dots", (d) =>
    `${d.getUTCFullYear()}·${pad(d.getUTCMonth() + 1)}·${pad(d.getUTCDate())}`
  );
  // For the RSS feed.
  eleventyConfig.addFilter("rfc822", (d) => d.toUTCString());
  eleventyConfig.addFilter("first", (arr, n) => arr.slice(0, n));

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    markdownTemplateEngine: false,
  };
}
