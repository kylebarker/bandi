import {
  GET_USERS,
  GET_FOREIGN_USER,
  GET_MATCHED_USERS,
  MATCH_USERS
} from './types';
import axios from 'axios';

export const getUsers = (userid, city, zipCode) => {
  return {
    type: 'GET_USERS',
    payload: axios.get(`http://localhost:3000/users/${userid}/search?city='${city}'&zip_code=${zipCode}`)
  }
}

export const getForeignUser = (id) => {
  return {
    type: 'GET_FOREIGN_USER',
    payload: axios.get(`http://localhost:3000/users/${id}/user`)
  }
}

export const getMatchedUsers = (id)=> {
  return {
    type: 'GET_MATCHED_USERS',
    payload: axios.get(`http://localhost:3000/users/${id}/matched`)
  }
}

export const matchUsers = (uid, mid) => {
  return {
    type: 'MATCH_USERS',
    payload: axios.post(`http://localhost:3000/users/${uid}/match/${mid}`)
  }
}
