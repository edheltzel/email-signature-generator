/**
 * Get the current year - copyright
 * @example {% year %}
 */
module.exports = (copyright) => {
  return `&copy; ${new Date().getFullYear()}`;
};
