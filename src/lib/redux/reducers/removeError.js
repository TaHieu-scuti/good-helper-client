export default (state, { payload }) => {
    let newState = Object.assign({}, state);
    newState.error_descriptions = payload;
    return newState;
  };