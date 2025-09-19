const fs = require("fs");
const matter = require("gray-matter");
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

  // shortcode to render to body of a specific external markdown file
  eleventyConfig.addShortcode("renderExternalMarkdown", function (filePath) {

    // read the file and parse with gray-matter
    const fileContent = fs.readFileSync(filePath, "utf8");
    const parsedFile = matter(fileContent);

    // return the content without the front matter as html
    return md.render(parsedFile.content);
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

  eleventyConfig.addPassthroughCopy("language/language.min.css");

  return {
    dir: {
      input: "language",
      output: "_site/language"
    }
  };
};
