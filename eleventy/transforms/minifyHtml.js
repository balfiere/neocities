const htmlmin = require("html-minifier-terser");

module.exports = function (eleventyConfig) {

  eleventyConfig.addTransform("htmlmin", function (content) {
    // Only process HTML output
    if ((this.page.outputPath || "").endsWith(".html")) {

      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });

      return minified;
    }

    return content;
  });
};
