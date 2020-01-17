export default (state, { payload }) => {
    let newState = Object.assign({}, state);
    newState.error_login = payload;
    return newState;
  };
  