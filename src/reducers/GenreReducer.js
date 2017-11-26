import {
  FETCH_GENRES_FULFILLED,
  UPDATE_USER_GENRES_FULFILLED,
  GET_USER_GENRES_FULFILLED
} from '../actions/types';

const INITIAL_STATE = {
  genres: {},
  userGenres: []
}

 export default( state = INITIAL_STATE, action) => {

   switch(action.type){
    case FETCH_GENRES_FULFILLED:
      return { ...state, genres: action.payload }
    case UPDATE_USER_GENRES_FULFILLED:
      return { ...state }
    case GET_USER_GENRES_FULFILLED:
      let payload = action.payload.data.map(genre => {
        console.log('genre reducer', genre)
        return {
          id: genre.genre_id,
          genre: genre.genre
        }
      })
      return { ...state, userGenres: payload }
    default:
      return state;
   }
 }
