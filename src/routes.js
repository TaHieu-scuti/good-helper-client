import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Logout from './components/Logout';
import SearchPage from './components/SearchPage';
import JobsPage from './components/JobsPage'

const routes = [
  { path: '/home', exact: true, name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/search', name: 'Search', component: SearchPage },
  { path: '/post', name: 'Search', component: JobsPage }
];

export default routes;
