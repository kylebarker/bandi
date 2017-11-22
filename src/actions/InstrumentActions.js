import {
  FETCH_INSTRUMENTS,
  UPDATE_USER_INSTRUMENTS,
} from './types';
import axios from 'axios';

export const fetchInstruments = () => {
  return {
    type: 'FETCH_INSTRUMENTS',
    payload: axios.get(`http://localhost:3000/instruments`)
  }
}



export const updateUserInstruments = (userid, instruments) => {
  return {
    type: 'UPDATE_USER_INSTRUMENTS',
    payload: axios.post(`http://localhost:3000/instruments/${userid}`, {instruments: instruments})
  }
}
