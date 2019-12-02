export default (state, {payload}) => {
    let newState = Object.assign({}, state);
    newState.error_des = payload;
    return newState;
  }