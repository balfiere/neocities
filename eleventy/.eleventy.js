const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}

const mdAttr = {
  leftDelimiter: '{',
  rightDelimiter: '}',
  allowedAttributes: []  // empty array = all attributes are allowed
}

module.exports = async function (eleventyConfig) {
  const { RenderPlugin } = await import("@11ty/eleventy");

  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.setLibrary(
    'md',
    markdownIt(mdOptions)
      .use(markdownItAttrs, mdAttr)
  );

  eleventyConfig.addFilter("markdown", function (data) {
      return markdownIt.renderInline(data);
  });

  return {
    dataTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid'
  };
}