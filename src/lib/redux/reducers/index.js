import UPDATE_ME from './updateMe';
import initialState from '../stateDefinitions';

const reducers = {
  UPDATE_ME
}

export default (state = initialState, action = {}) => {
  if (reducers[action.type] === undefined) {
    return state;
  }
  return reducers[action.type](state, action);
};