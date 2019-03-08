/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, ERROR_FETCHING, FETCH_SUCCESSFUL, ADDING_SMURF, ADD_SUCCESSFUL, ERROR_ADDING } from '../actions'


//  Your initial/default state for this project could *Although does not have to* look a lot like this

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchSuccesful: false,
   addingSmurf: false,
   addSuccessful: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs:true
      }
      case FETCH_SUCCESSFUL:
        return {
          ...state,
          fetchingSmurfs: false,
          smurfs: action.payload
        }
      case ERROR_FETCHING:
        return {
          ...state,
          fetchingSmurfs:false,
          error: action.payload
        }
      case ADDING_SMURF:
        return {
          ...state,
          addingSmurf: true,
        }
      case ADD_SUCCESSFUL: 
        return {
          ...state,
          addingSmurf: false,
          smurfs: action.payload
        }
      case ERROR_ADDING: 
        return {
          ...state,
          addingSmurf: false,
          error: action.payload
        }
    default:
      return state
  }
}
