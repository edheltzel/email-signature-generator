/**
 * Adds Scss support to eleventy
 * @param {Object} config - eleventy config object
 * @summary uses eleventy-sass plugin to process scss files
 * @see https://github.com/kentaroi/eleventy-sass/blob/main/docs/sass-options.md
 * @property loadPaths: ["node_modules/bootstrap/scss"],
 */
const scss = require("eleventy-sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
module.exports = (config) => {
  config.addPlugin(scss, [
    {
      sass: {
        style: "expanded",
        sourceMap: true
      },
      postcss: postcss([autoprefixer])
    },
    {
      sass: {
        style: "compressed",
        sourceMap: false
      },
      when: [{ ENV: "production" }]
    }
  ]);
};
