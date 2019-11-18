export default (state, {payload}) => {
  let newState = Object.assign({}, state);
  newState.me = payload;
  return newState;
}
