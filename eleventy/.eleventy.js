const markdownIt = require('markdown-it');
// const markdownItAnchor = require('markdown-it-anchor')
// const pluginTOC = require('eleventy-plugin-toc')
const markdownItAttrs = require('markdown-it-attrs');
// const markdownItContainer = require('markdown-it-container');

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

// const articleCont = {
//         validate(params) {
//           return params.trim().match(/article/)
//         },
//         render(tokens, idx) {  
//           if (tokens[idx].nesting === 1) {
//             // opening tag
//             return '<article>\n';
  
//           } else {
//             // closing tag
//             return '</article>\n';
//           }
//         }
//       }

// const article = (children) => {
//   const content = markdownIt.render(children);
//   return `<article>${content}</article>`
// }

module.exports = eleventyConfig => {
  // Markdown
  eleventyConfig.setLibrary(
    'md',
    markdownIt(mdOptions)
      .use(markdownItAttrs, mdAttr)
    //   .use(markdownItAnchor, mdAnchorOpts)
      // .use(markdownItContainer, 'article', articleCont)
      // .use(markdownItContainer, 'description')
  );
  // eleventyConfig.addShortcode("divider", function() {
  //   return `<div class="divider"><img src="divider2.gif"><img src="divider2.gif"><img src="divider2.gif"></div>`;
  // });
  // eleventyConfig.addPairedShortcode(
  //   'description', (children) => {
  //     return `<div class="description">${children}</div>`
  //   });
  // eleventyConfig.addPairedShortcode(
  //   'article', (children) => {
  //     return `<article>${children}</article>`
  //   });
  eleventyConfig.addFilter("markdown", function (data) {
	  return markdownIt.renderInline(data);
  });
  return {
    markdownTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid'
  };
}