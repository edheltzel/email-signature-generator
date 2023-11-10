/**
 * Get the current package version - version
 * @example {% version %}
 */
const Version = require("../../package.json").version;
const Repo = require("../../package.json").repository.url;

const fdVersion = (version) => {
  return `v${Version}`;
};

const fdUrl= (repo) => {
  return `${Repo}`;
};


module.exports = {
  fdVersion, fdUrl
};
