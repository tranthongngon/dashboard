import Dashboard from "../containers/Dashborad";
import Calendar from "../containers/Calendar";
import Chart from "../containers/Chart";
import Gallery from "../containers/Gallery";
import Notes from "../containers/Notes";
import Profile from "../containers/Profile";
import Table from "../containers/Table";

import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PieChartIcon from '@mui/icons-material/PieChart';
import CollectionsIcon from '@mui/icons-material/Collections';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import TableChartIcon from '@mui/icons-material/TableChart';

const routes = [
 {
  type: 'route',
  name: 'Dashboard',
  key: 'dashboard',
  route: '/dashboard',
  icon: <HomeIcon color="primary" fontSize="medium"/>,
  component: <Dashboard />
 },
 {
  type: 'route',
  name: 'Calendar',
  key: 'calendar',
  route: '/calendar',
  icon: <CalendarMonthIcon color="primary" fontSize="medium"/>,
  component: <Calendar />
 },
 {
  type: 'route',
  name: 'Table',
  key: 'table',
  route: '/table',
  icon: <TableChartIcon color="primary" fontSize="medium"/>,
  component: <Table />
 },
 {
  type: 'route',
  name: 'Chart',
  key: 'chart',
  route: '/chart',
  icon: <PieChartIcon color="primary" fontSize="medium"/>,
  component: <Chart />
 },
 {
  type: 'route',
  name: 'Notes',
  key: 'notes',
  route: '/notes',
  icon: <FormatListBulletedIcon color="primary" fontSize="medium"/>,
  component: <Notes />
 },
 {
  type: 'route',
  name: 'Gallery',
  key: 'gallery',
  route: '/gallery',
  icon: <CollectionsIcon color="primary" fontSize="medium"/>,
  component: <Gallery />
 },
 {
  type: 'route',
  name: 'Profile',
  key: 'profile',
  route: '/profile',
  icon: <PersonIcon color="primary" fontSize="medium"/>,
  component: <Profile />
 }
]
export default routes;