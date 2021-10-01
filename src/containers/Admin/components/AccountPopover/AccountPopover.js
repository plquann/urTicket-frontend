import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { alpha } from '@material-ui/core/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@material-ui/core';
import { IconHome, IconSetting, IconUser } from 'components/Icons';
import MenuPopover from '../MenuPopover/MenuPopover';

import account from 'containers/Admin/_mocks_/account';

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: <IconHome width={22} height={22} fillColor={'#dbe2fb'} />,
    linkTo: '/'
  },
  {
    label: 'Profile',
    icon: <IconUser width={22} height={22} fillColor={'#dbe2fb'} />,
    linkTo: '#'
  },
  {
    label: 'Settings',
    icon: <IconSetting width={22} height={22} fillColor={'#dbe2fb'} />,
    linkTo: '#'
  }
];

export default function AccountPopover({ user }) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={user.avatar ?? 'https://res.cloudinary.com/jackson-pham/image/upload/v1620351649/avatar_default.jpg'} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {user.userName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary' }} noWrap>
            {user.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box sx={{
              mr: 2,
              width: 24,
              height: 24
            }}>
              {option.icon}
            </Box>

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined">
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
