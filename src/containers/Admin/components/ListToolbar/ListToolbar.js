import PropTypes from 'prop-types';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import {
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment
} from '@material-ui/core';
import { IconFill, IconSearch, IconTrash } from 'components/Icons';

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 320, placeholder: { color: '#000' } },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

ListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func
};

export default function ListToolbar({ numSelected, filterName, onFilterName , placeHolder}) {
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'text.primary',
          bgcolor: 'grey'
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder={placeHolder}
          startAdornment={
            <InputAdornment position="start">
              <Box>
                <IconSearch width={20} height={20} fillColor={'#C5CBE2'} />
              </Box>
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <IconTrash width={30} height={30} fillColor={'#C5CBE2'} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <IconFill  width={30} height={30} fillColor={'#C5CBE2'} />
          </IconButton>
        </Tooltip>
      )}
    </RootStyle>
  );
}
