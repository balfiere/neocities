const fs = require("fs");
const matter = require("gray-matter");
const markdownIt = require("markdown-it");

const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
});

module.exports = function (eleventyConfig) {

  // shortcode to render to body of a specific external markdown file
  eleventyConfig.addShortcode("renderExternalMarkdown", function (filePath) {

    // read the file and parse with gray-matter
    const fileContent = fs.readFileSync(filePath, "utf8");
    const parsedFile = matter(fileContent);

    // return the content without the front matter as html
    return md.render(parsedFile.content);
  });
};
