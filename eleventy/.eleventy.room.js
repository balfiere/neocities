const core = require("./.eleventy.core.js");

module.exports = function (eleventyConfig) {

  core(eleventyConfig);

  eleventyConfig.addPassthroughCopy("neocities/room/stuff.min.css");

  return {
    dir: {
      input: "neocities/room",
      output: "_site/room"
    }
  };
};
