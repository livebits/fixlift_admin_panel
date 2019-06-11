import { combineReducers } from 'redux';
import * as types from '../constants/types';

const preState = {
    factorItem: {
        factorId: 0,
        name: '',
        quantity: '',
        unitPrice: ''
    },
    factor: {
        id: 0
    }
};

function factor(state = preState.factor, action) {
    switch (action.type) {
        case types.SET_FACTOR:
            return action.factor;
        default:
            return state
    }
}

function factorItem(state = preState.factorItem, action) {
    switch (action.type) {
        case types.SET_FACTOR_ITEM:
            return action.factorItem;
        default:
            return state
    }
}

export default combineReducers({
    factor,
    factorItem
});