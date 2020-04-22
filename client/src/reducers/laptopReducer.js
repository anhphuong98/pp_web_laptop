import { API_CALLING, GET_LAPTOPS, GET_LAPTOP } from '../actionTypes';

const initialState = {
    laptops : [],
    laptop : {},
    apiCallDone : false
}

const laptopReducer = (state = initialState,  action) => {
    switch(action.type) {
        case API_CALLING:
            return {
                ...state,
                apiCallDone : false
            }
        case GET_LAPTOPS:
            return {
                ...state,
                success : action.payload.success,
                laptops : action.payload.data.rows
            }
        case GET_LAPTOP:
            return {
                ...state,
                success : action.payload.success,
                laptop : action.payload.data,
                apiCallDone : true
            }
        default:
            return state
    }
}

export default laptopReducer;