var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',    //改变文件立刻刷新，而且保存了现有的state
      './app/app.js'                    //入口配置文件
    ],
    output: {
        path: './build',                
        filename: "bundle.js"           //输出文件，即index.html需要引入的文件
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/,  loader: 'babel-loader', exclude: /node_modules/},
            // { test: /\.css$/, loader: "style!css" },
            {
                test: /\.css$/,
                loader: "style!css?module&localIdentName=[hash:base64:5]&-url"
            },
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