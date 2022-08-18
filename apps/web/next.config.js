const withTM = require("next-transpile-modules")(["ui"]);

// Comment
module.exports = withTM({
  reactStrictMode: true,
});
