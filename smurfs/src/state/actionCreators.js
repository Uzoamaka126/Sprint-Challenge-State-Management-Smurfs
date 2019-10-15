import Axios from 'axios';
import * as types from './actionTypes';

Axios.defaults.baseURL = 'http://localhost:3333';

// export function onInputChange(event, item) {
//     event.preventDefault();
//     let newSmurf = {
//         smurf: item,
//     }
//     return({
//         type: types.ON_INPUT_CHANGE,
//         payload: { smurf: newSmurf}
//     });
// }

export const postForm = (smurf) => dispatch => {
    Axios
        .post('/smurfs', smurf)
        .then(res => {
            dispatch({ type: types.GET_SMURFS, payload: res.data});    
        })
        .catch(err => {
            dispatch({ type: types.GET_SMURFS_FAILURE, payload: err.message })
        })
        // dispatch({ type: types.RESET });
    // return {
    //     type: types.ADD_SMURFS,
    //     payload: smurf,
    // }
};

export const getAllSmurfs = () => dispatch => {
    // dispatch({ type: types.GET_SMURFS});

    Axios
        .get('/smurfs')
        .then(res => 
            dispatch({ type: types.GET_SMURFS_SUCCESS, payload: res.data})
        )
        .catch(err => 
            dispatch({ type: types.GET_SMURFS_FAILURE, payload: err.message})
        )
}
