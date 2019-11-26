import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

const routes = [
  { path: '/home', exact: true, name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage }
];

export default routes;
