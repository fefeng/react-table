import './app.scss';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React_table_App from '../containers/App';
import reactTableApp from '../containers/reducers';
import common from './common';

//	 随机生成数据用以渲染表格
let data= [];
let account = ['ubunut','root','admin','Administrator','sa'];
for (let i = 1; i <= 100; i++) {
	data.push({
		id:i,
		ip:"200.210.33."+Math.floor(Math.random()*255),
		hostName:'HostName'+i,
		os:'ubunut',
		account:account[Math.floor(Math.random()*5)],
		macAddress:common.uuid().substring(0,16),
		port:Math.floor(Math.random()*100),
	})
};

//	 Redux 应用只有一个单一的 store
let store = createStore(reactTableApp);

render(
  <Provider store={store}>
   	<React_table_App data={data}/>
  </Provider>,
  document.getElementById('root')
)

let unsubscribe = store.subscribe(() =>
	console.log("dispatch:",store.getState())
);