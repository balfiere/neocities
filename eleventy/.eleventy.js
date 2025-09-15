const { EleventyRenderPlugin } = require("@11ty/eleventy");
const fs = require("fs");
const matter = require("gray-matter");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItDeflist = require("markdown-it-deflist");

module.exports = function (eleventyConfig) {

  // basic markdown setup

  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }).use(markdownItAttrs)
    .use(markdownItDeflist);

  eleventyConfig.setLibrary("md", md);

  // filters for rendering markdown

  eleventyConfig.addFilter("markdownify", (content) => {
    return md.render(content);
  });
  eleventyConfig.addFilter("markdownify-inline", (content) => {
    return md.renderInline(content);
  });

  // shortcodes for my resources site

  eleventyConfig.addPairedShortcode("resourcesContainer", function (content, title) {
    return `<article>
  <details>
    <summary class="subheader"><h3>${title}</h3></summary>
    <div class="mainboxescontent">${content}</div>
  </details>
</article>`;
  });

  eleventyConfig.addPairedShortcode("resourcesContainerOpen", function (content, title) {
    return `<article>
    <div class="subheader"><h3>${title}</h3></div>
    <div class="mainboxescontent">${content}</div>
</article>`;
  });

  // shortcode to include rendered content of a specific input file

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addShortcode("renderExternalMarkdown", function (filePath) {
    // Read the file and parse with gray-matter
    const fileContent = fs.readFileSync(filePath, "utf8");
    const parsedFile = matter(fileContent);

    // Return the content without the front matter
    return parsedFile.content;
  });
  return {
    htmlTemplateEngine: 'liquid'
  };
};
