module.exports = {
  images: {
    domains: ['192.168.31.51', 'api.purplecakeboutique.az', '46.101.106.253', ],
  },
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
};
