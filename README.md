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
#### index.html

    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>React Table</title>
            <link rel="stylesheet" type="text/css" href="./node_modules/bootstrap/dist/css/bootstrap.css">
        </head>
        <body>
            <div class="container">
                <div id="root"></div>            
            </div>        
            <script src="bundle.js"></script>   //只引入打包好的文件。
        </body>
    </html>

#### /webpack.config.js
    
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
    
#### /app/app.js

    import './app.scss';                        //直接引入sass文件而不是css文件
    import React from 'react';
    import { render } from 'react-dom';
    import { createStore } from 'redux';
    import { Provider } from 'react-redux';
    import React_table_App from '../containers/App';
    import reactTableApp from '../containers/reducers';
    import common from './common';
    
    let store = createStore(reactTableApp);     //Redux 应用只有一个单一的 store
    let data = common.getData();                // 随机生成数据
    
    render(
      <Provider store={store}>
        <React_table_App data={data}/>
      </Provider>,
      document.getElementById('root')
    )
    
    let unsubscribe = store.subscribe(() =>
        console.log("dispatch:",store.getState())
    );

redux中规定了store只能为一个。且store需要使用 Provider传入