import { combineReducers } from 'redux';
import InstrumentReducer from './InstrumentReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import GenreReducer from './GenreReducer';

const rootReducer = combineReducers({
  instruments: InstrumentReducer,
  auth: AuthReducer,
  users: UserReducer,
  genres: GenreReducer
})

export default rootReducer;
