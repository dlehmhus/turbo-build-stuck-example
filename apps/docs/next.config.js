const withTM = require("next-transpile-modules")(["ui"]);
const path = require("path");

module.exports = withTM({
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    // this includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
});
