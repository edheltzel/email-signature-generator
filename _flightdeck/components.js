/**
 * Flightdeck UI Components for AutoPilot
 * @param {Object} config - eleventy config object
 * @summary This adds custom ui components for Autopilot design system.
 *
 */
const button = require("./components/buttonLink");
const flightdeck = require("./components/flightdeck-info");
module.exports = (config) => {
  config.addShortcode("button", button);
  config.addShortcode("version", flightdeck.fdVersion);
  config.addShortcode("repo", flightdeck.fdUrl);
};
