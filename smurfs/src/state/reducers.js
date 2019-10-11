import * as types from './actionTypes';
import * as actions from './actionCreators';

const initialFormState = {
    name: '',
    age: '',
    height: ''
};

const initialSmurfState = {
    smurf: [],
    error: '',
    isFetching: false
};

export function formReducer(state = initialFormState) {

}

export function smurfReducer(state = initialSmurfState, act)
