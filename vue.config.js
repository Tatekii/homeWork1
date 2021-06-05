const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // css:{
  //   loaderOption:{
  //     less:{
  //       javascriptEnable:true
  //     }
  //   }
  // },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Social Media Dashboard";
      return args;
    });
    config.resolve.alias.set("@", path.join(__dirname, "src"));
    config.module.rules.delete("svg");

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "[name]",
      });
  }
};
