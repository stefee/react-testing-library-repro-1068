module.exports = {
  clearMocks: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx$": [
      "@swc-node/jest",
      {
        target: "es2018",
        react: {
          runtime: "automatic",
          development: true,
        },
      },
    ],
  },
};
