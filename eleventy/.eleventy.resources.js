const core = require("./.eleventy.core.js");

module.exports = function (eleventyConfig) {

  core(eleventyConfig);

  // wrappers

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

  eleventyConfig.addPassthroughCopy("neocities/resources/resources.min.css");

  return { 
    dir: { 
      input: "neocities/resources", 
      output: "_site/resources" 
    } 
  };
};
