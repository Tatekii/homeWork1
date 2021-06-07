module.exports = {
  presets: [["@babel/preset-env", { modules: false }]],
  plugins: [
    "lodash",
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
