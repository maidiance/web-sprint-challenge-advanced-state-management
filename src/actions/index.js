import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, 
// performs an axios call to retreive smurfs from our server, 
// saves the result of that call to our state and shows an error if one is made.

export const fetchSmurfs = () => (dispatch) => {
    let smurfs = [];
    axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            dispatch(fetchStart());
            dispatch(fetchSuccess(resp.body));
            smurfs = resp.body;
        })
        .catch(err => {
            dispatch(fetchFail(err));
        })
    return smurfs;
}

export const fetchStart = () => {
    return({type: FETCH_START});
}
export const fetchSuccess = (smurfs) => {
    return({type: FETCH_SUCCESS, payload: smurfs});
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error});
}

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)

export const addSmurf = (smurf) => {
    return({type: ADD_SMURF, payload: smurf});
}

//3. Add a standard action that allows us to set the value of the error message slice of state.

export const setError = (error) => {
    return({type: SET_ERROR, payload: error});
}