/**
 * Flightdeck UI Components for AutoPilot
 * @param {Object} config - eleventy config object
 * @summary This adds custom ui components for Autopilot design system.
 *
 */
const button = require("./components/buttonLink");
const version = require("./components/flightdeck-version");
module.exports = (config) => {
  config.addShortcode("button", button);
  config.addShortcode("version", version);
};
