import identity from './identity';

export default {
  // Access token of login user. (persist)
  identity,
  // User data of who login.
  me: null,
  http: null,
  error_descriptions : '',
  is_requesting : false,
  jobs: {
    title: '',
    category: '',
    location: '',
    img: ''
  },
  userCheckotp: null
}
