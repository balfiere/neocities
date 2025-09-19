const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItDeflist = require("markdown-it-deflist");
const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

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

  // filter to extract a given yaml key from a collection, then return an array of objects with the key name and the count of times it appears. array can be sorted by count or alphabetically
  eleventyConfig.addFilter("extractKeyWithCount", function (collection, key = "categories", sortBy = "count") {
    // initialize an empty object to store counts of each value
    let counts = {};

    // loop through each item in the collection
    collection.forEach(item => {
      // if the item has a value for the specified key
      if (item.data[key]) {
        // if the value is already an array, use that, otherwise convert it to an array
        let values = Array.isArray(item.data[key])
          ? item.data[key]
          : [item.data[key]];

        // loop through each value in the array of values
        values.forEach(val => {
          // trim the value and add it to the counts object
          let name = String(val).trim();
          counts[name] = (counts[name] || 0) + 1;
        });
      }
    });

    // convert the counts object to an array of objects
    let result = Object.entries(counts).map(([name, count]) => ({
      name,
      count
    }));

    // sort the results array
    if (sortBy === "alpha") {
      result.sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
    } else if (sortBy === "count") {
      result.sort((a, b) => b.count - a.count);
    }

    return result;
  });

  eleventyConfig.addPlugin(eleventyAutoCacheBuster);

  return {
    dir: { 
      input: "codes", 
      output: "_site/codes" 
    } 
  };
};
