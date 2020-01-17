export default (storeState, { payload }) => {
    let newState = Object.assign({}, storeState);
    newState.searchAdvanced = payload;
    return newState;
  };