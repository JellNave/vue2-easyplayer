module.exports = {
  publicPath: "./", // 静态资源路径（默认/，打包后会白屏）
  outputDir: "dist", // 打包后文件的目录 （默认为dist）
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false, //不输出map文件
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
  },
  chainWebpack: (config) => {
    if (process.env.use_analyzer) {
      // 分析
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  },
};
