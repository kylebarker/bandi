import {
  FETCH_INSTRUMENTS_FULFILLED,
  UPDATE_USER_INSTRUMENTS_FULFILLED
} from '../actions/types';

const INITIAL_STATE = {
  instruments: {}
}

 export default( state = INITIAL_STATE, action) => {

   switch(action.type){
    case FETCH_INSTRUMENTS_FULFILLED:
      return { ...state, instruments: action.payload.data }
    case UPDATE_USER_INSTRUMENTS_FULFILLED:
      return { ...state }
    default:
      return state;
   }
 }
