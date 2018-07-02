import types from '../actions/types';

const DEFAULT_STATE = {
    time: new Date().toLocaleTimeString(),
    header: 'The time is...'
};

function clockReducer(state = DEFAULT_STATE, action){

    console.log('Clock Reducer:', action);

    switch(action.type){
        case types.UPDATE_TIME:
            return {...state, time: action.currentTime };
        default:
            return state;
    }
}

export default clockReducer;
