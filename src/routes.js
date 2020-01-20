import HomePage from './components/HomePage';
import LoginPage from './components/Auth/LoginPage';
import Logout from './components/Auth/logout';
import SearchPage from './components/Jobs/SearchPage';
import DetailJobPage from './components/Jobs/DetailJobPage';
import JobsPage from './components/Jobs/JobsPage';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import Register from './components/Auth/Register';
import CheckOTP from './components/Auth/CheckOTP';
import JobHelpMarkdown from './components/Helper/JobMarkdowned';
import JobAppied from './components/Helper/JobApplied';
import ChangePassword from './components/Profile/ChangePassword';
import CheckOTPAgain from './components/Auth/CheckOTPAgain';
import EditPostOfNeeder from './components/Needer/EditPostOfNeeder'
import AddPostOfNeeder from './components/Needer/AddNewPost'
import JobFinishOfHelper from './components/Helper/JobFinishOfHelper'
import SearchAdvancedPage from './components/Jobs/SearchAdvancedPage'
import JobDoing from './components/Helper/JobDoing'

const routes = [
  { path: '/home', exact: true, name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/search', name: 'Search', component: SearchPage },
  { path: '/posts', name: 'Post', component: JobsPage },
  { path: '/job/detail/:id', name: 'DetailJob', component: DetailJobPage },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/edit/profile', name: 'EditProfile', component: EditProfile },
  { path: '/register', name: 'Register', component: Register },
  { path: '/checkotp', name: 'CheckOTP', component: CheckOTP },
  { path: '/markdown/helper', name: 'markdown', component: JobHelpMarkdown },
  { path: '/helper/jobappiled', name: 'jobappied', component: JobAppied }, 
  { path: '/password/change', name: 'ChangePassword', component: ChangePassword },
  { path: '/again/checkotp', name: 'CheckOTP', component: CheckOTPAgain },
  { path: '/edit/post/:id', name: 'editPost', component: EditPostOfNeeder },
  { path: '/add/post/needer', name: 'AddPostOfNeeder', component: AddPostOfNeeder },
  { path: '/post/finish', name: 'jobFinish', component: JobFinishOfHelper },
  { path: '/advanced/search', name: 'SearchAdvancedPage', component: SearchAdvancedPage },
  { path: '/post/doing', name: 'JobDoing', component: JobDoing },
];

export default routes;
