module.exports = {
    devServer: {
        public: 'portifolio-v2-lssouto.c9users.io:8080'
    },
    css: {
        loaderOptions: {
          sass: {
            data: 
              '@import "@/assets/scss/main.scss";'
            }
        }
    }
}
