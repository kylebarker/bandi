import {
  FETCH_GENRES_FULFILLED,
  UPDATE_USER_GENRES_FULFILLED,
  FETCH_USER_GENRES_FULFILLED
} from '../actions/types';

const INITIAL_STATE = {
  genres: {},
  userGenres: {}
}

 export default( state = INITIAL_STATE, action) => {

   switch(action.type){
    case FETCH_GENRES_FULFILLED:
      return { ...state, genres: action.payload }
    case UPDATE_USER_GENRES_FULFILLED:
      return { ...state }
    case FETCH_USER_GENRES_FULFILLED:
      return { ...state, userGenres: action.payload }
    default:
      return state;
   }
 }
