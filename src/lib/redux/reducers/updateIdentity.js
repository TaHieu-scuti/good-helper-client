export default (storeState, {payload}) => {
  let newState = Object.assign({}, storeState);
  newState.identity = {
    token: payload.token,
  };
  return newState;
};
