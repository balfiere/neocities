const core = require("./.eleventy.core.js");
const renderExternalMarkdown = require("./shortcodes/renderExternalMarkdown.js");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  core(eleventyConfig);
  renderExternalMarkdown(eleventyConfig);

  eleventyConfig.addPassthroughCopy("neocities/language/language.min.css");

  eleventyConfig.addFilter("prettyDate", function(dateString) {
    if (!dateString) return "";

    // Parse the incoming ISO8601 string
    let dt = DateTime.fromISO(dateString, { zone: "utc" });
    if (!dt.isValid) return dateString;

    // Format with month, day, year
    const month = dt.toFormat("LLLL"); // Full month name
    const day = dt.day;
    const year = dt.year;

    // Determine ordinal suffix
    const suffix = (d => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    })(day);

    return `${month} ${day}${suffix}, ${year}`;
  });

  return {
    dir: {
      input: "neocities/language",
      output: "_site/language"
    }
  };
};
