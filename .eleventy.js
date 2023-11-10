// Eleventy Configuration
const addWorkflow = require("./_flightdeck/workflow");
const addFilters = require("./_flightdeck/filters");
const addTransforms = require("./_flightdeck/transforms");
const addShortcodes = require("./_flightdeck/shortcodes");
const addPlugins = require("./_flightdeck/plugins");
const addComponents = require("./_flightdeck/components");

module.exports = (config) => {
  addWorkflow(config); // dev server, layout aliases, watch, passthrough copy
  addFilters(config); // universal filters
  addTransforms(config); // esbuild, scss, jampack transforms
  addShortcodes(config); // copyright year, youtube embeds, etc.
  addPlugins(config); // eleventy plugins
  addComponents(config); // custom components for Flightdeck Airframe

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_includes/data",
    },
    markdownTemplateEngine: "njk",
  };
};
