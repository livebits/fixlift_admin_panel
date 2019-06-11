import * as types from '../constants/types';

export const setPermissions = (permissions) => ({
    type: types.SET_PERMISSIONS,
    permissions: permissions,
});