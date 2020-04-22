import { combineReducers } from 'redux';
import laptopReducer from './laptopReducer';
import accoutReducer from './accountReducer';
import testLaptopReducer from './testLaptopReducer';

const rootReducer = combineReducers({
    laptop : laptopReducer,
    account : accoutReducer,
    testLaptop : testLaptopReducer
});

export default rootReducer;