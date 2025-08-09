module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css"); 
  return {
    dir: {
      input: "src",      // source folder
      output: "_site"    // where the built site will go
    }
  };
};
