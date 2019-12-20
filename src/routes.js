import HomePage from './components/HomePage';
import LoginPage from './components/Auth/LoginPage';
import Logout from './components/Auth/logout';
import DetailJobPage from './components/Jobs/DetailJobPage';
import SearchPage from './components/Jobs/SearchPage';

const routes = [
  { path: '/home', exact: true, name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/job/detail/:id', name: 'DetailJob', component: DetailJobPage },
  { path: '/search', name: 'Search', component: SearchPage }
];

export default routes;
