import { combineReducers } from 'redux';
import * as types from '../constants/types';

const preState = {
    permissions: [],
};
function permissions(state = preState.permissions, action) {
    switch (action.type) {
        case types.SET_PERMISSIONS:
            return action.permissions;
        default:
            return state
    }
}

export default combineReducers({
    permissions,
});