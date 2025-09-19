const filters = require("./filters");
const transforms = require("./transforms");
const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

module.exports = function(eleventyConfig) {
    
  // register filters. currently loads: markdownify
  filters.forEach(fn => fn(eleventyConfig));

  // register transforms. currently loads: htmlmin
  transforms.forEach(fn => fn(eleventyConfig));

  eleventyConfig.addPlugin(eleventyAutoCacheBuster);
};