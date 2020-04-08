import { API_CALLING, GET_LAPTOPS } from '../actionTypes'; 
import Axios from 'axios';

export const getAllLaptop = () => dispatch => {
    dispatch({
        type : API_CALLING
    });
    Axios.get('http://localhost:5000/api/laptop').then(function(res){
        dispatch({
            type : GET_LAPTOPS,
            payload : res.data
        })
        console.log(res.data);
    });
   
}