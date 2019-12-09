export default (storeState, { payload }) => {
  let newState = Object.assign({}, storeState);
  newState.me = null;
  newState.identity.token = null;
  newState.error_descriptions = '';
  return newState;
};
