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
      <ListItem button key={item.text}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    ))}
  </div>
);

export default mainListItems;
