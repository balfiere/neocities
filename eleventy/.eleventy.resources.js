const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItDeflist = require("markdown-it-deflist");
const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");
const htmlmin = require("html-minifier-terser");

module.exports = function (eleventyConfig) {

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

  // shortcodes for my resources site

  eleventyConfig.addPairedShortcode("resourcesContainer", function (content, title) {
    return `<section>
  <details>
    <summary class="subheader"><h3>${title}</h3></summary>
    <div class="mainboxescontent">${content}</div>
  </details>
</section>`;
  });

  eleventyConfig.addPairedShortcode("resourcesContainerOpen", function (content, title) {
    return `<section>
    <div class="subheader"><h3>${title}</h3></div>
    <div class="mainboxescontent">${content}</div>
</section>`;
  });

  eleventyConfig.addPassthroughCopy("resources/resources.min.css");

  eleventyConfig.addPlugin(eleventyAutoCacheBuster);

  eleventyConfig.addTransform("htmlmin", function (content) {

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

  return { 
    dir: { 
      input: "resources", 
      output: "_site/resources" 
    } 
  };
};
