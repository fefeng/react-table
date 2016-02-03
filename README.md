# react+redux 实例
## 运行实例
 1. 下载代码。
 2. npm install 安装依赖包
 3. npm start 运行项目
 4. 访问：[http://127.0.0.1:8080/webpack-dev-server/][1]
  [1]: http://127.0.0.1:8080/webpack-dev-server/

## 项目结构分析
    react-table/
    ├── components/     //react小组件
    │   ├── R_Table.js
    │   ├── R_Tbody.js
    │   └── R_Toobar.js
    ├── app/            // 组件入口            
    │   ├── app.js
    │   ├── app.scss
    │   └── common.js
    ├── redux/          //redux文件
    │    ├── actions.js
    │    ├── app.js
    │    └── reducers.js
    ├── index.html
    ├── package.json
    ├── webpack.config.js
## 代码分析
*代码使用了es6的新特性，以及react基础知识请自行了解学习*
####webpack.config.js
    
    var webpack = require('webpack');
    module.exports = {
        entry: [
          'webpack/hot/dev-server',
          './app/app.js'
        ],
        output: {
            path: './build',
            filename: "bundle.js"
        },
        module: {
            loaders: [
                { test: /\.js?$/,  loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
                { test: /\.js$/,   loader: 'babel-loader',exclude: /node_modules/},
                { test: /\.css$/,  loader: "style!css" },
                { test: /\.scss$/, loader: 'style!css!sass'},
            ]
        },
        resolve:{
            extensions:['','.js','.json']
        },
        plugins: [
            new webpack.NoErrorsPlugin()
        ]
    };
    
