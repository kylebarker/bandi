import {
  FETCH_INSTRUMENTS_FULFILLED,
  UPDATE_USER_INSTRUMENTS_FULFILLED,
  GET_USER_INSTRUMENTS_FULFILLED
} from '../actions/types';

const INITIAL_STATE = {
  instruments: {},
  userInstruments: []
}

 export default( state = INITIAL_STATE, action) => {

   switch(action.type){
    case FETCH_INSTRUMENTS_FULFILLED:
      return { ...state, instruments: action.payload.data }
    case UPDATE_USER_INSTRUMENTS_FULFILLED:
      return { ...state }
    case GET_USER_INSTRUMENTS_FULFILLED:
      let payload = action.payload.data.map(instrument => {
        return {
          id: instrument.instrument_id,
          instrument: instrument.instrument
        }
      })
      return { ...state, userInstruments: payload }
    default:
      return state;
   }
 }
