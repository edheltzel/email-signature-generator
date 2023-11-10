/**
 * Codepen Embeds - ref: https://blog.codepen.io/documentation/embedded-pens/
 * @param {string} penUrl - codepen full url
 * @param {number} height - optional: value in pixels
 * @param {string} tabs - optional: values -> html/html,result/css/css,result/js/js,result
 * @param {string} themeId - optional: values -> light, dark, default -> custom themes are a pro feature
 * @example {% codepen "https://codepen.io/jacobberglund/pen/bwrGvx", 900, "css,result", "178" %}
 */

module.exports = (penUrl, penHeight = "300", tabs = "result", themeId = "") => {
  const splitUrl = penUrl.split("/");

  const splitProfileUrl = splitUrl.filter((string, index) => {
    return index < splitUrl.length - 2 ? true : false;
  });

  const userProfile = splitProfileUrl.join("/");
  const slugHash = splitUrl[splitUrl.length - 1];
  const userName = splitProfileUrl[splitProfileUrl.length - 1];

  return `<p class="codepen" data-height="${penHeight}" data-theme-id="${themeId}" data-default-tab="${tabs}" data-slug-hash="${slugHash}" data-user="${userName}">
    <span><a href="${penUrl}">See the pen</a> (<a href="${userProfile}">@${userName}</a>) on <a href="https://codepen.io">CodePen</a>.</span>
    </p><script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;
};
