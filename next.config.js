// // next.config.js
// const withSass = require("@zeit/next-sass");

// module.exports = withSass({
//   /* config options here */
// });

require("dotenv").config();

const path = require("path");

const Dotenv = require("dotenv-webpack");

module.exports = {
  serverRuntimeConfig: {
    secret: "123"
  },

  publicRuntimeConfig: {
    NProgressShowSpinner: false
  },

  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, "env"),
        systemvars: true
      })
    ];

    return config;
  }
};
