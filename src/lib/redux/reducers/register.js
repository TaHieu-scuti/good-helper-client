export default (storeState, { payload }) => {
  let newState = Object.assign({}, storeState);
  newState.register = payload;
  return newState;
};
