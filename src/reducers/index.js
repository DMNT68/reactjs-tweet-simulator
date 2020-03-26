import { combineReducers } from 'redux';
import modalsReducer from './modalsReducer';
import validationsReducer from './validationsReducer';
import tweetsReducer from './tweetsReducer';

export default combineReducers({
	modals: modalsReducer,
	validation: validationsReducer,
	tweets: tweetsReducer
});
