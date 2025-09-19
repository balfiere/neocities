const core = require("./.eleventy.core.js");
const collapsible = require("markdown-it-collapsible");
const span = require('markdown-it-bracketed-spans')

module.exports = function (eleventyConfig) {

    // add details plugin to markdown-it
    // and <span> support to attributes
    core(eleventyConfig, {
        markdownPlugins: [collapsible, span]
    });

    eleventyConfig.addPassthroughCopy("neocities/main/css/body.min.css");

    return {
        dir: {
            input: "neocities/main",
            output: "_site/main"
        }
    };
};