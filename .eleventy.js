


module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("blog", function(collection) {
    return collection.getFilteredByGlob("src/blog/*.njk");
  });

  eleventyConfig.addPassthroughCopy("src/css");

  // Import prior to `module.exports` within `.eleventy.js`
const { DateTime } = require("luxon");

eleventyConfig.addFilter("postDate", (dateObj) => {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});

  return {
    dir: {
      input: "src",
      output: "."
    }
  };
};
