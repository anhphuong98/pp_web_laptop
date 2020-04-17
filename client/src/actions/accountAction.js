import axios from 'axios';
import  { LOGIN, API_CALLING, SIGN_UP } from '../actionTypes';

export const login = (data) => dispatch => {
    dispatch({
        type : API_CALLING
    });
    axios.post('http://localhost:5000/api/user/signIn', data).then(function(res) {
        console.log(res.data)
        dispatch({
            type : LOGIN,
            payload : res.data
        })
    });
}

export const signUp = (data) => dispatch => {
    dispatch({
        type : API_CALLING
    });
    axios.post('http://localhost:5000/api/user/signUp', data).then(function(res){
        console.log(res.data)
        dispatch({
            type : SIGN_UP,
            payload : res.data
        })
    });
}