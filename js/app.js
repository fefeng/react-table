import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React_table_App from '../containers/react_table/App';
import reactTableApp from '../containers/react_table/reducers';
import common from './common';

let data= [];
let platform = ['腾讯云','阿里云','亚马逊云','华为','58同城'];
let account = ['ubunut','root','admin','Administrator','sa'];

for (let i = 1; i <= 100; i++) {
	data.push({
		id:i,
		platform:platform[Math.floor(Math.random()*5)],
		hostName:'HostName'+i,
		os:'ubunut',
		account:account[Math.floor(Math.random()*5)],
		password:common.uuid().substring(0,10),
		port:Math.floor(Math.random()*100),
	})
};

let store = createStore(reactTableApp);
let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <React_table_App data={data} platform={platform}/>
  </Provider>,
  rootElement
)

console.log(store.getState());
let unsubscribe = store.subscribe(() =>
  console.log("",store.getState())
);

document.getElementById('gotoTop').addEventListener('click',function(e){
	window.scrollTo(10,10); 	
});