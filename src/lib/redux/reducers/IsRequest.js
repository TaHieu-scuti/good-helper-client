export default (state, { payload }) => {
  let newState = Object.assign({}, state);
  if (payload === true) {
    newState.error_descriptions = '';
    newState.jobs = {
      title: "",
      category: "",
      location: "",
      img: ""
    };
  }
  newState.is_requesting = payload;
  return newState;
};