import { API_CALLING, GET_LAPTOPS } from '../actionTypes';

const initialState = {
    laptops : [],
    apiCallDone : false
}

const laptopReducer = (state = initialState,  action) => {
    switch(action.type) {
        case API_CALLING:
            return {
                ...state,
                apiCallDone : true
            }
        case GET_LAPTOPS:
            return {
                ...state,
                success : action.payload.data.success,
                laptops : action.payload.data.rows
            }
        default:
            return state
    }
}

export default laptopReducer;