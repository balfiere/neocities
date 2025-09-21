const core = require("./.eleventy.core.js");

module.exports = function(eleventyConfig) {
    
  core(eleventyConfig);

  return {
    HTMLTemplateElement: "liquid",
  }
};