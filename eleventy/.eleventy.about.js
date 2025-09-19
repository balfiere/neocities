const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItDeflist = require("markdown-it-deflist");
const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");
const htmlmin = require("html-minifier-terser");

module.exports = function (eleventyConfig) {

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  });

  // basic markdown setup

  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }).use(markdownItAttrs)
    .use(markdownItDeflist)
    ;

  eleventyConfig.setLibrary("md", md);

  // filters for rendering markdown

  eleventyConfig.addFilter("markdownify", (content) => {
    return md.render(content);
  });
  eleventyConfig.addFilter("markdownify-inline", (content) => {
    return md.renderInline(content);
  });

  eleventyConfig.addPlugin(eleventyAutoCacheBuster);

  eleventyConfig.addTransform("htmlmin", function (content) {
    // Only process HTML output
    if ((this.page.outputPath || "").endsWith(".html")) {
      // Skip if the input file lives in "codes/"
      if (this.page.inputPath.includes("/codes/")) {
        return content;
      }

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
  
  eleventyConfig.addPassthroughCopy("about/about.min.css");

  return {
    dir: { 
      input: "about", 
      output: "_site/about" 
    } 
  };
};
