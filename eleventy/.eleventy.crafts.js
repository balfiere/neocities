const core = require("./.eleventy.core.js");
const extractKeyWithCount = require("./filters/extractKeyWithCount.js");

module.exports = function (eleventyConfig) {

  core(eleventyConfig);
  extractKeyWithCount(eleventyConfig);

  eleventyConfig.addPassthroughCopy("neocities/crafts/crafts.min.css");
  eleventyConfig.addPassthroughCopy("neocities/crafts/script.min.js");
  
	eleventyConfig.addCollection("crafts", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("neocities/crafts").sort(function (a, b) {
      return new Date(b.data.end_date) - new Date(a.data.end_date);
		});
	});

  return {
    dir: { 
      input: "neocities/crafts", 
      output: "_site/crafts" 
    } 
  };
};
