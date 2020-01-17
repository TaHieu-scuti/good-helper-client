import UPDATE_ME from './updateMe';
import initialState from '../stateDefinitions';
import SET_HTTP_CLIENT from './setHttpClient';
import RAISE_ERROR from './raiseError';
import UPDATE_IDENTITY from './updateIdentity';
import SET_TOKEN_ON_HTTP_CLIENT from './setTokenOnHttpClient';
import LOGOUT from './logout';
import UPDATE_JOB from './updateJob';
import REMOVE_JOB from './removeJob'
import SEARCH_OUTSIDE from './searchOutside';
import REGISTER from './register';
import USERCHECKOTP from './userCheckOtp';
import REMOVE_ERROR from './removeError';
import LOGIN_ERROR from './loginError';

const reducers = {
  UPDATE_ME,
  SET_HTTP_CLIENT,
  RAISE_ERROR,
  UPDATE_IDENTITY,
  SET_TOKEN_ON_HTTP_CLIENT,
  LOGOUT,
  UPDATE_JOB,
  REMOVE_JOB,
  SEARCH_OUTSIDE,
  REGISTER,
  USERCHECKOTP,
  REMOVE_ERROR,
  LOGIN_ERROR
}

export default (state = initialState, action = {}) => {
  if (reducers[action.type] === undefined) {
    return state;
  }
  return reducers[action.type](state, action);
};
