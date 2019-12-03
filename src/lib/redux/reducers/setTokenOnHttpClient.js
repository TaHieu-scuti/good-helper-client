export default (storeState, {payload}) => {
  let newState = Object.assign({}, storeState);
  newState.http.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`;
  return newState;
};