const core = require("./.eleventy.core.js");

module.exports = function (eleventyConfig) {

  core(eleventyConfig);

  eleventyConfig.addPassthroughCopy("neocities/yakuza/characters/characters.css");
  eleventyConfig.addPassthroughCopy("neocities/yakuza/characters/characters.js");
  
	eleventyConfig.addCollection("yakuza-characters", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("yakuza-profiles").sort(function (a, b) {
			// return a.inputPath.localeCompare(b.inputPath);
      // sort by most recently edited first (the updated property)
      return new Date(a.data.updated) - new Date(b.data.updated);
		});
	});

  return {
    dir: { 
      input: "neocities/yakuza/characters", 
      output: "_site/yakuza/characters" 
    } 
  };
};
