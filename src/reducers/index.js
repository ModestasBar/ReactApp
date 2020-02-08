import { combineReducers } from 'redux';
import { facilityReducer, exposureReducer, inputReducer } from './reducers';

const rootReducer = combineReducers({
  input: inputReducer,
  facility: facilityReducer,
  exposure: exposureReducer,
});

export default rootReducer;
