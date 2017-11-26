import {
  GET_USERS,
} from './types';
import axios from 'axios';

export const getUsers = () => {
  return {
    type: 'GET_USERS',
    payload: axios.get(`http://localhost:3000/users`)
  }
}
