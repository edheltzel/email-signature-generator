/**
 * Blockquote Component – FlightDeck Autopilot
 * @param {string} text - The text to display in the blockquote
 * @param {string} source - The source of the blockquote or Author of the quote
 * @example {% blockquote "First, solve the problem. Then, write the code.", "John Johnson" %}
 */

module.exports = (text, source) => {
  return `<!-- Blockquote-->
  <blockquote>
    ${text}
    <footer>
      <cite>- ${source}</cite>
    </footer>
  </blockquote>
`;
};
