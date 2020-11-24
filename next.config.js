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
      "/sebet": {page: "/sebet"}
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    };
  },
};
