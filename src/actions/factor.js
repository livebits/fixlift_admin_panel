import * as types from '../constants/types';

export const setFactorItem = (factorItem) => ({
    type: types.SET_FACTOR_ITEM,
    factorItem: factorItem,
});

export const setFactor = (factor) => ({
    type: types.SET_FACTOR,
    factor: factor,
});