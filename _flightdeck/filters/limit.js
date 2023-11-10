/**
 * Return a subset of array items limited to the passed number
 * @example {{ for item in collections.all | limit(3) }}
 */
const postLimit = (arr, limit) => {
  return arr.slice(0, limit);
};

/**
 * Useful if using a value such as layout - which returns the full filename
 * @example <body class="layout--{{ layout | stripFilename }}">
 */
const stripFilename = (file) => {
  return file.replace(/\.[^/.]+$/, "");
};

module.exports = { postLimit, stripFilename };
