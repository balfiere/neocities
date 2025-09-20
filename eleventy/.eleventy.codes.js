const extractKeyWithCount = require("./filters/extractKeyWithCount.js");
const markdownify = require("./filters/markdownify.js");

module.exports = function (eleventyConfig) {

  extractKeyWithCount(eleventyConfig);
  markdownify(eleventyConfig);
  
	eleventyConfig.addCollection("image-gallery-sort", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("image-gallery").sort(function (a, b) {
			return a.inputPath.localeCompare(b.inputPath);
		});
	});

  return {
    dir: { 
      input: "neocities/codes", 
      output: "_site/codes" 
    } 
  };
};
