import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  CREATE_USER_FULFILLED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  user: {}
 }

 export default( state = INITIAL_STATE, action) => {
   console.log(action)

   switch(action.type){
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload }
    case CREATE_USER_FULFILLED:
      console.log('hello', action.payload)
      return { ...state, user: action.payload.data[0] }
    default:
      return state;
   }
 }
