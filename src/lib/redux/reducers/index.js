import UPDATE_ME from './updateMe';
import initialState from '../stateDefinitions';
import SET_HTTP_CLIENT from './setHttpClient';

const reducers = {
  UPDATE_ME,
  SET_HTTP_CLIENT
}

export default (state = initialState, action = {}) => {
  if (reducers[action.type] === undefined) {
    return state;
  }
  return reducers[action.type](state, action);
};