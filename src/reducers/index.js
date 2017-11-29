import { combineReducers } from 'redux';
import InstrumentReducer from './InstrumentReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import UsersReducer from './UsersReducer';

const rootReducer = combineReducers({
  instruments: InstrumentReducer,
  auth: AuthReducer,
  users: UserReducer,
  foreignUsers: UsersReducer
})

export default rootReducer;
