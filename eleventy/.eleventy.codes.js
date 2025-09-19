const extractKeyWithCount = require("./filters/extractKeyWithCount.js");
const markdownify = require("./filters/markdownify.js");

module.exports = function (eleventyConfig) {

  extractKeyWithCount(eleventyConfig);
  markdownify(eleventyConfig);

  return {
    dir: { 
      input: "neocities/codes", 
      output: "_site/codes" 
    } 
  };
};
