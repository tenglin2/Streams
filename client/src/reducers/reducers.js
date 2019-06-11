// You are naming this specifically. Remember to import it correctly.
import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
});