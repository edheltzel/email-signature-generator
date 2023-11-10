/**
 * Get the current package version - version
 * @example {% version %}
 */
const fdVersion = require("../../package.json").version;

module.exports = (version) => {
  return `v${fdVersion}`;
};
