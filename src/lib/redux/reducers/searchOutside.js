export default (storeState, { payload }) => {
  let newState = Object.assign({}, storeState);
  newState.searchOutside = payload;
  return newState;
};
