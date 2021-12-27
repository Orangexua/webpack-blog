// webpack.config.js

const path = require('path')

module.export = {
    mode: 'development',
    entry: { 
        path: './src/index.js'
    }, //入口文件
    output:{
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'bundle.js', //打包后的文件名称
        path:path.resolve(__dirname,'./dist') //打包后的目录
    },
    module: {
      rules: [
        {
            test: /\.css$/,
            use: [
              // [style-loader](/loaders/style-loader)
              { loader: 'style-loader' },
              // [css-loader](/loaders/css-loader)
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              },
              // [sass-loader](/loaders/sass-loader)
              { loader: 'sass-loader' }
            ]
        }
      ]
    }
}
