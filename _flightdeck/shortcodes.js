/**
 * Shortcodes
 * @param {Object} config - eleventy config object
 * @summary This adds custom shortcodes for additional functionality.
 *
 */
const codepen = require("./shortcodes/codepen");
const copyright = require("./shortcodes/copyright");
const theFold = require("./shortcodes/theFold");

module.exports = (config) => {
  config.addShortcode("codepen", codepen);
  config.addShortcode("copyright", copyright);
  config.addShortcode("thefold", theFold);
};
