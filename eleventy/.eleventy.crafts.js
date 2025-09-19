const core = require("./.eleventy.core.js");
const extractKeyWithCount = require("./filters/extractKeyWithCount.js");

module.exports = function (eleventyConfig) {

  core(eleventyConfig);
  extractKeyWithCount(eleventyConfig);

  eleventyConfig.addPassthroughCopy("neocities/crafts/crafts.min.css");

  return {
    dir: { 
      input: "neocities/crafts", 
      output: "_site/crafts" 
    } 
  };
};
