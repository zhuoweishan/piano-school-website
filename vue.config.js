module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        // 自动给每个 scss 文件注入变量，再也不用手动引入了
        additionalData: `@import "@/assets/css/variables.scss";`
      }
    }
  }
};