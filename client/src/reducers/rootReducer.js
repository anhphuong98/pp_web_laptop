import { combineReducers } from 'redux';
import laptopReducer from './laptopReducer';

const rootReducer = combineReducers({
    laptop : laptopReducer
});

export default rootReducer;