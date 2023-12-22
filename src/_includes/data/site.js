/** cSpell:disable */
const isDev = process.env.ENV === "development";

const baseUrl = isDev ? "localhost:8080" : "https://google.com/";
const site = {
  baseUrl,
  title: "Weston & Associates",
  description: "E-mail Signature Generate",
  authorName: "Ed Heltzel",
  domain: "westonandassociates.com",
  social: {
    facebook: "westonacllc",
    linkedin: "weston-and-associates-llc",
  },
};

module.exports = site;
