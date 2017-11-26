import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  CREATE_USER_FULFILLED,
  LOGIN_USER_FULFILLED
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
    case 'CREATE_USER': {
      return { ...state, user: { email: data.email, password: data.password}}
    }
    case CREATE_USER_FULFILLED:
      console.log('hello', action.payload)
      return { ...state, user: action.payload.data[0] }
    case LOGIN_USER_FULFILLED:
      cosnole.log('login user reducer payload', action.payload)
      return { ...state }
    default:
      return state;
   }
 }
