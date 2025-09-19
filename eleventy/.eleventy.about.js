const core = require("./.eleventy.core.js");

module.exports = function (eleventyConfig) {

  core(eleventyConfig);
  
  eleventyConfig.addPassthroughCopy("neocities/about/about.min.css");

  return {
    dir: { 
      input: "neocities/about", 
      output: "_site/about" 
    } 
  };
};
