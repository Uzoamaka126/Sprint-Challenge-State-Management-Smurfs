import * as types from './actionTypes';
// import * as actions from './actionCreators';


const initialSmurfState = {
    smurfs: [],
    error: '',
    isFetching: false
};

export function formReducer(state = initialFormState, action) {
    switch(action.type) {
        case types.ADD_SMURFS:
            return {
                ...state,
                // show: true,
                // ...action.payload
                
            };
        case types.ON_INPUT_CHANGE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case types.RESET:
            return initialFormState;
        default:
            return state;
    }
}

export function smurfReducer(state = initialSmurfState, action) {
    console.log('smurfReducer', action)
    switch(action.type) {
        case types.GET_SMURFS:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case types.ADD_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case types.ADD_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

