import {combineReducers} from 'redux';
import * as types from '../constants/types';

import permission from "./permission";
import factor from "./factor";


const appReducer = combineReducers({
    permission,
    factor,
});

const rootReducer = (state, action) => {

    return appReducer(state, action);
};

export default rootReducer;