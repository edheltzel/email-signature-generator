/**
 * Returns the first 200 characters as the excerpt
 * @example {{ post.templateContent | excerpt }}
 */
module.exports = (post) => {
  const content = post.replace(/(<([^>]+)>)/gi, "");
  return `${content.substr(0, content.lastIndexOf(" ", 200))}...`;
};
