/* Config file */
module.exports = function(eleventyConfig) {
  // Ce dossier est cloné lors du build
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/style.css");

  return{
    dir: {
      input: "src",
      output: "public"
    }
  }
};