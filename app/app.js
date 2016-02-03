import './app.scss';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React_table_App from '../containers/App';
import reactTableApp from '../containers/reducers';
import common from './common';


let store = createStore(reactTableApp);		//Redux 应用只有一个单一的 store
let data = common.getData();				// 随机生成数据

render(
  <Provider store={store}>
   	<React_table_App data={data}/>
  </Provider>,
  document.getElementById('root')
)

let unsubscribe = store.subscribe(() =>
	console.log("dispatch:",store.getState())
);