import UPDATE_ME from './updateMe';
import initialState from '../stateDefinitions';
import SET_HTTP_CLIENT from './setHttpClient';
import RAISE_ERROR from './raiseError';

const reducers = {
  UPDATE_ME,
  SET_HTTP_CLIENT,
  RAISE_ERROR
}

export default (state = initialState, action = {}) => {
  if (reducers[action.type] === undefined) {
    return state;
  }
  return reducers[action.type](state, action);
};
