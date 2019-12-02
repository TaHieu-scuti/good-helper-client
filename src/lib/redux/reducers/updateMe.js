export default (state, {payload}) => {
  let newState = Object.assign({}, state);
  newState.errordes = payload;
  return newState;
}
