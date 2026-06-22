module.exports = function(eleventyConfig) {
  // Skip the phantom ACL-locked directory that crashes the watcher
  eleventyConfig.watchIgnores.add("src/assets/globe/**");
  eleventyConfig.ignores.add("src/assets/globe/**");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets/hero-globe.js");
  eleventyConfig.addPassthroughCopy("src/assets/world-mask.png");
  eleventyConfig.addPassthroughCopy("src/assets/client-projects.js");
  eleventyConfig.addPassthroughCopy("src/assets/motion.js");
  eleventyConfig.addPassthroughCopy("src/assets/footer-shader.js");
  eleventyConfig.addPassthroughCopy("src/assets/anim.js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    }
  };
};
