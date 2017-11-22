import {
  FIRST_NAME_CHANGED,
  AGE_CHANGED,
  CITY_CHANGED,
  ZIP_CODE_CHANGED,
  DESCRIPTION_CHANGED,
  INFLUENCES_CHANGED,
  GET_NEW_USER,
  UPDATE_USER_FULFILLED
} from '../actions/types';

const INITIAL_STATE = {
  firstName: '',
  age: '',
  city: '',
  zipCode: '',
  description: '',
  influences: '',

 }

 export default( state = INITIAL_STATE, action) => {
   console.log(action)

   switch(action.type){
    case FIRST_NAME_CHANGED:
      return { ...state, firstName: action.payload }
    case AGE_CHANGED:
      return { ...state, age: action.payload }
    case CITY_CHANGED:
      return { ...state, city: action.payload }
    case ZIP_CODE_CHANGED:
      return { ...state, zipCode: action.payload }
    case DESCRIPTION_CHANGED:
      return { ...state, description: action.payload }
    case INFLUENCES_CHANGED:
      return { ...state, influences: action.payload }
    case GET_NEW_USER:
      return { ...state }
    case UPDATE_USER_FULFILLED:
      console.log('update user reducer', action.payload)
      return { ...state }
    default:
      return state;
   }
 }
