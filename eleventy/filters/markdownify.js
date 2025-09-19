const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig, plugins = []) {
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  });

  // Default plugins
  const defaultPlugins = [
    require("markdown-it-attrs"),
    require("markdown-it-deflist"),
  ];

  // Apply default + site-specific plugins
  [...defaultPlugins, ...plugins].forEach(plugin => {
    if (Array.isArray(plugin)) {
      md.use(plugin[0], plugin[1]); // plugin with options
    } else {
      md.use(plugin);
    }
  });

  // Register markdown instance with Eleventy
  eleventyConfig.setLibrary("md", md);

  // Filters for rendering markdown
  eleventyConfig.addFilter("markdownify", content => md.render(content));
  eleventyConfig.addFilter("markdownify-inline", content =>
    md.renderInline(content)
  );
};