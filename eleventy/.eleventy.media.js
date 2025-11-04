const extractKeyWithCount = require("./filters/extractKeyWithCount.js");
const basename = require("./filters/returnBasename.js");
const markdownify = require("./filters/markdownify.js");

module.exports = function (eleventyConfig) {

  extractKeyWithCount(eleventyConfig);
  basename(eleventyConfig);
  markdownify(eleventyConfig);
  
	eleventyConfig.addCollection("book-sort", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("mediaDB/book").sort(function (a, b) {
      // sort by end_date. if end_date is missing, sort by start_date
      aDate = a.data.end_date ? new Date(a.data.end_date) : new Date(a.data.start_date);
      bDate = b.data.end_date ? new Date(b.data.end_date) : new Date(b.data.start_date);
      return bDate - aDate;
		});
	});

  return {
    dir: { 
      input: "neocities/media", 
      output: "_site/media" 
    } 
  };
};
