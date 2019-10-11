import Axios from 'axios';
import * as types from './actionTypes';

const smurfsApi = 'http://localhost:3333';

// export const postForm = (smurf) => dispatch => {
//     Axios
//         .post(`${smurfsApi}/smurfs`, data)
//         .then(res => {
//             dispatch({ type: types.ADD_SMURFS, });    
//         })
//         .catch(err => {
//             dispatch({ type: types.ADD_SMURFS_FAILURE, payload: err.message })
//         })
//         dispatch({ type: types.RESET });
//     // return {
//     //     type: types.ADD_SMURFS,
//     //     payload: smurf,
//     // }
// };

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

export const getAllSmurfs = () => dispatch => {
    dispatch({ type: types.ADD_SMURFS});

    Axios
        .get(`${smurfsApi}/smurfs`)
        .then(res => 
            dispatch({ type: types.ADD_SMURFS_SUCCESS, payload: res.data})
        )
        .catch(err => 
            dispatch({ type: types.ADD_SMURFS_FAILURE, payload: err.message})
        )
}
// export function add