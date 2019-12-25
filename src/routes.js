import HomePage from './components/HomePage';
import LoginPage from './components/Auth/LoginPage';
import Logout from './components/Auth/logout';
import SearchPage from './components/Jobs/SearchPage';
import DetailJobPage from './components/Jobs/DetailJobPage';
import JobsPage from './components/Jobs/JobsPage';
import Profile from './components/Profile/Profile';
const routes = [
  { path: '/home', exact: true, name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/search', name: 'Search', component: SearchPage },
  { path: '/posts', name: 'Post', component: JobsPage },
  { path: '/job/detail/:id', name: 'DetailJob', component: DetailJobPage },
  { path: '/profile', name: 'Profile', component: Profile },
];

export default routes;
