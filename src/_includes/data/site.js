const isDev = process.env.ENV === "development";

const baseUrl = isDev ? "localhost:8080" : "https://google.com/";
const site = {
  baseUrl,
  title: "Weston & Associates",
  description: "E-mail Signature Generate",
  authorName: "Ed Heltzel",
  social: [
    {
      name: "Github",
      profile: "edheltzel",
    },
    {
      name: "LinkedIn",
      profile: "edheltzel",
    },
    {
      name: "Instagram",
      profile: "edheltzel",
    },
  ],
};

module.exports = site;
