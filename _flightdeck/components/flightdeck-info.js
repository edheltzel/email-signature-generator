/**
 * Get the current package version - version
 * @example {% version %}
 */
const Version = require("../../package.json").version;
const Repo = require("../../package.json").repository.url;
const Homepage = require("../../package.json").homepage;

const fdVersion = (version) => {
  return `v${Version}`;
};

const fdUrl = (repo) => {
  return `${Repo}`;
};

const fdHomepage = (homepage) => {
  return `${Homepage}`;
};

module.exports = {
  fdVersion,
  fdUrl,
  fdHomepage,
};
