module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css"); 
  return {
    dir: {
      input: "src",
      output: "."
    }
  };
};


module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("blog", function(collection) {
    return collection.getFilteredByGlob("src/blog/*.md");
  });

  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};
