const core = require("./.eleventy.core.js");

module.exports = function (eleventyConfig) {

  core(eleventyConfig);

  eleventyConfig.addPassthroughCopy("neocities/yakuza/characters/*.css");
  eleventyConfig.addPassthroughCopy("neocities/yakuza/characters/*.js");
  
	eleventyConfig.addCollection("yakuza-characters", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("neocities/yakuza-profiles").sort(function (a, b) {
      return new Date(b.data.updated) - new Date(a.data.updated);
		});
	});

  return {
    dir: { 
      input: "neocities/yakuza/characters", 
      output: "_site/yakuza/characters" 
    } 
  };
};
