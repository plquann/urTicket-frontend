import React, { useState } from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';

import DashboardNavbar from 'containers/Admin/components/DashboardNavbar/DashboardNavbar';
import DashboardSidebar from 'containers/Admin/components/DashboardSidebar/DashboardSidebar';
import ThemeConfig from 'containers/Admin/theme';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export default function DashboardLayout(props) {
  console.log('Dash board layout')
  const { children } = props;
  const [open, setOpen] = useState(false);

  return (
    <ThemeConfig>
      <RootStyle>
        <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
        <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        <MainStyle>
          {children}
        </MainStyle>
      </RootStyle>
    </ThemeConfig>
  );
}
