import { IconClock, IconDashboard, IconMovie, IconNews, IconUser } from "components/Icons";

const getIcon = (name) => {
  switch (name) {
    case 'dashboard':
      return <IconDashboard width={22} height={22} fillColor={'#dbe2fb'} />;
    case 'user':
      return <IconUser width={22} height={22} fillColor={'#dbe2fb'} />;
    case 'movie':
      return <IconMovie width={22} height={22} fillColor={'#dbe2fb'} />;
    case 'news':
      return <IconNews width={22} height={22} fillColor={'#dbe2fb'} />;
    // case 'cinema':
    //   return <IconCinema width={22} height={22} fillColor={'#dbe2fb'} />;
    case 'showtimes':
      return <IconClock width={22} height={22} fillColor={'#dbe2fb'} />;
    default:
      return <IconDashboard width={22} height={22} fillColor={'#dbe2fb'} />;
  }
}

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: getIcon('dashboard')
  },
  {
    title: 'users',
    path: '/admin/users',
    icon: getIcon('user')
  },
  {
    title: 'movies',
    path: '/admin/movies',
    icon: getIcon('movie')
  },
  {
    title: 'news',
    path: '/admin/news',
    icon: getIcon('news')
  },
  // {
  //   title: 'Cinemas',
  //   path: '/admin/cinemas',
  //   icon: getIcon('cinema')
  // },
  {
    title: 'showtimes',
    path: '/admin/showtimes',
    icon: getIcon('showtimes')
  }
];

export default sidebarConfig;
