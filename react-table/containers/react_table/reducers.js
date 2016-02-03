import { combineReducers } from 'redux';
import { FILTER,LENGHTMENU } from './actions';

function operation(state = [],action){
	switch(action.type){
		case FILTER:
			return {...state,[FILTER]:action.text};
		case LENGHTMENU:
			return {...state,[LENGHTMENU]:action.text};
		default:
			return state;
	}	
}
const reactTableApp = combineReducers({
  operation,
})
export default reactTableApp;