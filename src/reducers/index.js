import { combineReducers } from 'redux';
import InstrumentReducer from './InstrumentReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import GenreReducer from './GenreReducer';
import UsersReducer from './UsersReducer';

const rootReducer = combineReducers({
  instruments: InstrumentReducer,
  auth: AuthReducer,
  users: UserReducer,
  genres: GenreReducer,
  foreignUsers: UsersReducer
})

export default rootReducer;
