export default (state, {payload}) => {
    let newState = Object.assign({}, state);
    newState.jobs = payload;
    return newState;
  }
  