const mdIt = require("markdown-it");
const mdItAttrs = require("markdown-it-attrs");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};
const markdownIt = mdIt(markdownItOptions).use(mdItAttrs);
exports.markdownIt = markdownIt;
