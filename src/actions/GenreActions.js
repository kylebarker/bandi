import {
  FETCH_GENRES,
  UPDATE_USER_GENRES,
  GET_USER_GENRES
} from './types';
import axios from 'axios';

export const fetchGenres = () => {
  return {
    type: 'FETCH_GENRES',
    payload: axios.get(`http://localhost:3000/genres`)
  }
}

export const updateUserGenres = (userid, genres) => {
  return {
    type: 'UPDATE_USER_GENRES',
    payload: axios.post(`http://localhost:3000/genres/${userid}`, {genres: genres})
  }
}

export const getUserGenres = (userid) => {
  return {
    type: 'GET_USER_GENRES',
    payload: axios.get(`http://localhost:3000/genres/${userid}`)
  }
}
