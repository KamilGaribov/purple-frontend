module.exports = {
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/gul": { page: "/gul" },
      "/xonca": { page: "/xonca" },
      "/marsipan": { page: "/marsipan" },
      "/vitrin": { page: "/vitrin" },
      "/haqqimizda": {page: "/haqqimizda"},
      "/sebet": {page: "/sebet"},
    };
  },
  webpackDevMiddleware: (config) => {
    // Solve compiling problem via vagrant
    config.watchOptions = {
      poll: 1000,   // Check for changes every second
      aggregateTimeout: 300,   // delay before rebuilding
    };
    return config;
  }
};
