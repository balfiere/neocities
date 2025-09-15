const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItDeflist = require("markdown-it-deflist");
const markdownItDetails = require("markdown-it-expandable");

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
      .use(markdownItDeflist)
      .use(markdownItDetails)
  );
  eleventyConfig.addPairedShortcode(
    'article', (children) => {
      return `<article>${children}</article>`
    });
  eleventyConfig.addFilter("markdown", function (data) {
    return markdownIt.renderInline(data);
  });
  eleventyConfig.addFilter("markdownify", function (data) {
    return markdownIt.render(data);
  });

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

  return {
    dataTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid'
  };
}