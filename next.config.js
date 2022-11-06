const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  swcMinify: true,
  images: {
    domains: ['camo.githubusercontent.com', 'user-images.githubusercontent.com'],
  },
});

