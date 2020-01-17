import {createAction} from 'redux-actions';
export const updateMe = createAction('UPDATE_ME');
export const setHttpClient = createAction('SET_HTTP_CLIENT');
export const raiseError = createAction('RAISE_ERROR');
export const setTokenOnHttpClient = createAction('SET_TOKEN_ON_HTTP_CLIENT');
export const updateIdentity = createAction('UPDATE_IDENTITY');
export const logout = createAction('LOGOUT');
export const updateJob = createAction('UPDATE_JOB');
export const removeJob = createAction('REMOVE_JOB')
export const searchOutside = createAction('SEARCH_OUTSIDE');
export const register = createAction('REGISTER');
export const userCheckotp = createAction('USERCHECKOTP');
export const removeError = createAction('REMOVE_ERROR');
export const loginError = createAction('LOGIN_ERROR');
export const removeErrorLogin = createAction('REMOVE_LOGIN_ERROR');
export const searchAdvanced = createAction('SEARCH_ADVANCED');
