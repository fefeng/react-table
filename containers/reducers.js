import { combineReducers } from 'redux';
import { FILTER,LENGHTMENU } from './actions';


function operation(state = [],action){
	switch(action.type){
		case FILTER:
			return {FILTER:action.text};
		case LENGHTMENU:
			return {LENGHTMENU:action.text};
		default:
			return state;
	}
}

//使用combineReducers 组合多个reducer
const reactTableApp = combineReducers({
  operation,
})
export default reactTableApp;