import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  CREATE_USER,
  LOGIN_USER
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
  return {
    type: 'CREATE_USER',
    payload: axios.post(`http://localhost:3000/users/create`, {email: email, password: password}),
    data: {email, password}
  }
}

export const loginUser = (email, password) => {
  return {
    type: 'LOGIN_USER',
    payload: axios.post(`http://localhost:3000/users/login`, {email: email, password: password})
  }
}
