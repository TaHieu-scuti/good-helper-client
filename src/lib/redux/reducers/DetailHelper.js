export default (state, {payload}) => {
    let newState = Object.assign({}, state);
    newState.detail_helper = payload;
    return newState;
  }