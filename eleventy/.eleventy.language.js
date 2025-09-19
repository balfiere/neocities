const core = require("./.eleventy.core.js");
const renderExternalMarkdown = require("./shortcodes/renderExternalMarkdown.js");

module.exports = function (eleventyConfig) {

  core(eleventyConfig);
  renderExternalMarkdown(eleventyConfig);

  eleventyConfig.addPassthroughCopy("neocities/language/language.min.css");

  return {
    dir: {
      input: "neocities/language",
      output: "_site/language"
    }
  };
};
