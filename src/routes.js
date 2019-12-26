import HomePage from './components/HomePage';
import LoginPage from './components/Auth/LoginPage';
import Logout from './components/Auth/logout';
import SearchPage from './components/Jobs/SearchPage';
import DetailJobPage from './components/Jobs/DetailJobPage';
import JobsPage from './components/Jobs/JobsPage'
import Register from './components/Auth/Register';
import CheckOTP from './components/Auth/CheckOTP';

const routes = [
  { path: '/home', exact: true, name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/search', name: 'Search', component: SearchPage },
  { path: '/posts', name: 'Post', component: JobsPage },
  { path: '/job/detail/:id', name: 'DetailJob', component: DetailJobPage },
  { path: '/register', name: 'Register', component: Register },
  { path: '/checkotp', name: 'CheckOTP', component: CheckOTP },
];

export default routes;
