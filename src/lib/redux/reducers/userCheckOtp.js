export default (state, {payload}) => {
    let newState = Object.assign({}, state);
    newState.userCheckotp = payload;
    return newState;
  }