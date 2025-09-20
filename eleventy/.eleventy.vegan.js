const core = require("./.eleventy.core.js");
const collapsible = require("markdown-it-collapsible");
const { RenderPlugin } = require("@11ty/eleventy")
// const span = require('markdown-it-bracketed-spans')

module.exports = function (eleventyConfig) {

    // add details plugin to markdown-it
    // and <span> support to attributes
    core(eleventyConfig, {
        markdownPlugins: [collapsible]
    });

	eleventyConfig.addPlugin(RenderPlugin);

    // sort the collection "recipes" alphabetically
    eleventyConfig.addCollection("recipes", function (collection) {
        return [...collection.getFilteredByGlob("neocities/vegan/recipes/*.md")].sort((a, b) => a.data.title.localeCompare(b.data.title));
    });
  
  eleventyConfig.addPassthroughCopy("neocities/vegan/vegan.min.css");

    return {
        dir: {
            input: "neocities/vegan",
            output: "_site/vegan"
        }
    };
};
