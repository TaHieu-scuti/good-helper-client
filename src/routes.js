import HomePage from './components/HomePage';
import Search from './components/Layouts/Search'

const routes = [
  { path: '/home', exact: true, name: 'Home', component: HomePage },
  { path: '/search', exact: true, name: 'Search', component: Search }
];

export default routes;
