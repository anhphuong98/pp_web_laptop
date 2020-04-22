import { API_CALLING, GET_LAPTOPS, GET_LAPTOP } from '../actionTypes'; 
import axios from 'axios';

export const getAllLaptop = () => dispatch => {
    dispatch({
        type : API_CALLING
    });
    axios.get('/api/laptop').then(function(res){
        dispatch({
            type : GET_LAPTOPS,
            payload : res.data
        });
    }).catch(function(error){
        console.log(error.response);
    });
   
}

// export const getDetailLaptop = (id) => dispatch => {
//     dispatch({
//         type : API_CALLING
//     });
//     axios.get('/api/laptop/' + id).then(function(res){
//         dispatch({
//             type : GET_LAPTOP,
//             payload : res.data
//         })
//     }).catch(function(error){
//         console.log(error.response);
//     });  
// }

export const getDetailLaptop = (id) => (
    async dispatch => {
        await dispatch({
            type : API_CALLING
        });
        const response = await fetch("/api/laptop/" + id);
        const data = await response.json();
        if(data.success === true){
            const payload = data
            await dispatch({
                type: GET_LAPTOP,
                payload
            })
        }else{
            console.log("Error get game")
        }
    }
)