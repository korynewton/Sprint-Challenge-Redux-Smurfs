import axios from 'axios'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCH_SUCCESSFUL = "FETCH_SUCCESSFUL";
export const ERROR_FETCHING = "ERROR_FETCHING";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCHING_SMURFS})
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({type:FETCH_SUCCESSFUL, payload: res.data})
    })
    .catch( () => {
      dispatch({type: ERROR_FETCHING, payload: 'error fecthing smurfs'})
    })
}
