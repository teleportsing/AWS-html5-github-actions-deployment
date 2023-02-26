module.exports = {
  open: true,
  logLevel: "silent",
  "port": 3101,
  "files": ["./src/**/*.{html,htm,css,js}"],
  server: {
    middleware: {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({
        index: '/index.html',
        verbose: true,
      }),
    },
  },
};