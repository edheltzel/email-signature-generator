/**
 * Button Component for Links – FlightDeck Autopilot
 * @param {string} link - The link to a page or external url
 * @param {string} text - The text to display in the blockquote
 * @example {% button "https://google.com", "Click Me", "self"%}
 */

module.exports = (link, text, target) => {
  return `<a href="${link}" role="button" target="_${target || "blank"}">${text}</a>`;
};
