const path = require("path");
const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Social Media Dashboard";
      return args;
    });
    config.resolve.alias.set("@", path.join(__dirname, "src"));
    config.resolve.alias.set("$public", path.join(__dirname, "public"));

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

    if(isProduction){
      config.plugin("html")
    }
  },
};
