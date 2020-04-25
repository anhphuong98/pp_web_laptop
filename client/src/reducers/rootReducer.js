import { combineReducers } from 'redux';
import laptopReducer from './laptopReducer';
import accoutReducer from './accountReducer';
import testLaptopReducer from './testLaptopReducer';
import commentReducer from './commentReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    laptop : laptopReducer,
    account : accoutReducer,
    testLaptop : testLaptopReducer,
    comment : commentReducer,
    cart : cartReducer
});

export default rootReducer;