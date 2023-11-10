/**
 * Transforms
 * @param {Object} config - eleventy config object
 * @description jamPack will increase build time dramatically.
 *
 */
const isProd = process.env.ENV === "production";
const { markdownIt } = require("./transforms/markdownIt"); // markdown-it plugins
const esBuild = require("./transforms/esBuild"); // scss compiling & js bundling
const jamPack = require("./transforms/jamPack"); // image optimization
const scss = require("./transforms/scss"); // scss compiling

module.exports = (config) => {
  config.setLibrary("md", markdownIt);
  config.addPlugin(scss);
  config.addPlugin(esBuild);

  if (isProd) {
    config.addPlugin(jamPack);
  }
};
