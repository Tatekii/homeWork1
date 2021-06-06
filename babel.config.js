module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    ["@babel/env", { targets: { node: 6 } }],
  ],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" },
    ],
    "lodash",
  ],
};
