module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("basename", function (input) {
    if (!input) return "";
    // Remove trailing slash if there is one
    input = input.trim().replace(/\/$/, "");
    // Return everything after the last slash
    return input.split(/[/\\]/).pop();
  });
};
