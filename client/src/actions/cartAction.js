import { ADD_TO_CART } from '../actionTypes';

export const addToCard = (quantity) => dispatch => {
    dispatch({
        type : ADD_TO_CART,
        payload : quantity
    })
};