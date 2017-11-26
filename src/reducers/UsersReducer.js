import {
  GET_USERS_FULFILLED
} from '../actions/types';

const INITIAL_STATE = {
  users: []
 }

 export default( state = INITIAL_STATE, action) => {
   switch(action.type){
    case GET_USERS_FULFILLED:
      return { ...state, users: action.payload }
    default:
      return state;
   }
 }
