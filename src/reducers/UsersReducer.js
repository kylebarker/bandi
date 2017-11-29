import {
  GET_USERS_FULFILLED,
  GET_FOREIGN_USER_FULFILLED,
  GET_MATCHED_USERS_FULFILLED,
  MATCH_USERS_FULFILLED
} from '../actions/types';

const INITIAL_STATE = {
  users: [],
  user: [],
  matched: []
 }

 export default( state = INITIAL_STATE, action) => {
   switch(action.type){
    case GET_USERS_FULFILLED:
      return { ...state, users: action.payload }
    case GET_FOREIGN_USER_FULFILLED:
      return { ...state, user: action.payload }
    case GET_MATCHED_USERS_FULFILLED:
      return { ...state, matched: action.payload }
    case MATCH_USERS_FULFILLED:
      return { ...state }
    default:
      return state;
   }
 }
