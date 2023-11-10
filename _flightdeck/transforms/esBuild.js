/**
 * Exports a function that runs BEFORE eleventy
 * @param {Object} config - eleventy config object
 * @summary This executes the esbuild tool on the output before build.
 * @link https://esbuild.github.io/api/#build-api
 * @link https://github.com/glromeo/esbuild-sass-plugin
 */
const isProd = process.env.ENV === "production";
const esbuild = require("esbuild");

module.exports = (config) => {
  config.on("eleventy.after", async () => {
    await esbuild.build({
      bundle: true,
      entryPoints: { "assets/js/app": "./src/assets/js/app.js" },
      minify: isProd,
      outdir: "dist",
      sourcemap: !isProd,
    });
  });
};
