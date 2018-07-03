import { combineReducers } from 'redux';
import clockReducer from './clock_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    clock: clockReducer,
    user: userReducer
});

export default rootReducer;
