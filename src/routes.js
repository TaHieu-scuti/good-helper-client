import HomePage from './components/HomePage';
import Login from './components/Layouts/Login'

const routes = [
  { path: '/home', exact: true, name: 'Home', component: HomePage },
  { path: '/login', name: 'login', component: Login }
];

export default routes;
