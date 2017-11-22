import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  CREATE_USER
} from './types';
import axios from 'axios';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const confirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};

export const createUser = (email, password) => {
  console.log("EMAIL: ", email);
  console.log("PW: ", password)
  return {
    type: 'CREATE_USER',
    payload: axios.post(`http://localhost:3000/users/create`, {email: email, password: password})
  }
}
