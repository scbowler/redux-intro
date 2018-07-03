import types from '../actions/types';

const DEFAULT_STATE = {
    username: 'Guest',
    count: 0
}

export default (state = DEFAULT_STATE, action) => {

    console.log('User Reducer:', action);

    switch(action.type){
        case types.UPDATE_TIME:
            return {...state, count: state.count + 1};
        default:
            return state;
    }
}
