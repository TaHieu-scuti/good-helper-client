export default (state, {payload}) => {
    let newState = Object.assign({}, state);
    newState.jobs = {
      title: '',
      category: '',
      location: '',
      img: ''
    }; 
    return newState;
  }
  