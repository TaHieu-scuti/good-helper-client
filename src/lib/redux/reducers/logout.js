export default (storeState, { payload }) => {
  let newState = Object.assign({}, storeState);
  newState.me = null;
  newState.identity.token = null;
  return newState;
};
