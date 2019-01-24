module.exports = {
  devServer: {
      disableHostCheck: true,
  },
  css: {
      loaderOptions: {
        sass: {
          data:
            '@import "@/assets/scss/main.scss";',
          },
      },
  },
};
