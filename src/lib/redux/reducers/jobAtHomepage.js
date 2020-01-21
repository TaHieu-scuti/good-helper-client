export default (state, {payload}) => {
    let newState = Object.assign({}, state);
    newState.jobHomepage = payload;
    return newState;
}
  