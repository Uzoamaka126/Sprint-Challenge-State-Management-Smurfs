import Axios from 'axios';
import * as types from './actionTypes';

const smurfsApi = '';

// export function getSmurfs(smurfs) {
//     return {
//         type: types.ADD_SMURFS,
//         payload: smurfs,
//     };
// }

export function createNewSmurf(item) {
    return {
        type: types.POST_SMURF,
        payload: item,
    }
};

export const getAllSmurfs = () => dispatch => {
    dispatch({ type: types.ADD_SMURFS})
}