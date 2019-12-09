import HomePage from './components/HomePage';
import AuthenticateComponent from './components/LoginPage';
import Logout from './components/Logout';

const routes = [
  { path: '/home', exact: true, name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: AuthenticateComponent },
  { path: '/logout', name: 'Logout', component: Logout }
];

export default routes;
