const markdownify = require("./filters/markdownify");
const transforms = require("./transforms");
const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

module.exports = function(eleventyConfig, options = {}) {
    
  // register markdownify. defaults to using attributes and definition lists plugins
  markdownify(eleventyConfig, options.markdownPlugins || []);

  // register transforms. currently loads: htmlmin
  transforms.forEach(fn => fn(eleventyConfig));

  // cache bust passed through files
  eleventyConfig.addPlugin(eleventyAutoCacheBuster);
};