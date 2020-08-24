import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import './SideBar.scss';

const items = [
  {
    icon: <DashboardIcon />,
    text: 'Dashboard',
  },
  {
    icon: <DateRangeIcon />,
    text: 'Schedule',
  },
  {
    icon: <LibraryBooksIcon />,
    text: 'Courses',
  },
  {
    icon: <PeopleAltIcon />,
    text: 'Gradbook',
  },
  {
    icon: <TrendingUpIcon />,
    text: 'Performance',
  },
  {
    icon: <AnnouncementIcon />,
    text: 'Announcements',
  },
];

const mainListItems = (
  <div>
    {items.map((item) => (
      <ListItem className="list__item" button key={item.text}>
        <ListItemIcon className="list__item__icon">{item.icon}</ListItemIcon>
        <ListItemText className="list__item__text" primary={item.text} />
      </ListItem>
    ))}
  </div>
);

export default mainListItems;
