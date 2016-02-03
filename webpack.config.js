var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      './app/app.js'
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/,  loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.css$/, loader: "style!css" },
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