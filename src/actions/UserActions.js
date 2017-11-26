import {
  FIRST_NAME_CHANGED,
  AGE_CHANGED,
  CITY_CHANGED,
  ZIP_CODE_CHANGED,
  DESCRIPTION_CHANGED,
  INFLUENCES_CHANGED,
  UPDATE_USER,
  GET_USER
} from './types';
import axios from 'axios';


export const firstNameChanged = (text) => {
  return {
    type: FIRST_NAME_CHANGED,
    payload: text
  }
}

export const ageChanged = (text) => {
  return {
    type: AGE_CHANGED,
    payload: text
  }
}

export const cityChanged = (text) => {
  return {
    type: CITY_CHANGED,
    payload: text
  }
}

export const zipCodeChanged = (text) => {
  return {
    type: ZIP_CODE_CHANGED,
    payload: text
  }
}

export const descriptionChanged = (text) => {
  return {
    type: DESCRIPTION_CHANGED,
    payload: text
  }
}

export const influencesChanged = (text) => {
  return {
    type: INFLUENCES_CHANGED,
    payload: text
  }
}

export const getUser = (email) => {
    return {
      type: GET_USER,
      payload: axios.get(`http://localhost:3000/users/${email}`)
    }
}

export const updateUser = (userid, first_name, age, city, zip_code, description, influences) => {
  return {
    type: UPDATE_USER,
    payload: axios.post(`http://localhost:3000/users/${userid}/edit`, {first_name: first_name, age: age, city: city, zip_code: zip_code, description: description, influences: influences })
  }
}
