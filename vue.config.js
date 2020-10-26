const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({remUnit: 37.5}),
                ]
            }
        }
    },
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [path.resolve(__dirname, "src/assets/styles/variable.less")] // 引入全局样式变量
      }
}
}
