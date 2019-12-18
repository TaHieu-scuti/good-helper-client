import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Logout from './components/Logout';
import DetailJobPage from './components/DetailJobPage';
import SearchPage from './components/SearchPage';

const routes = [
  { path: '/home', exact: true, name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/job/detail/:id', name: 'DetailJob', component: DetailJobPage },
  { path: '/search', name: 'Search', component: SearchPage }
];

export default routes;
