import { combineReducers } from 'redux';
import laptopReducer from './laptopReducer';
import accoutReducer from './accountReducer';

const rootReducer = combineReducers({
    laptop : laptopReducer,
    account : accoutReducer
});

export default rootReducer;