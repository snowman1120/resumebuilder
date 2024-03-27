import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { Box, Tooltip, ListItemText, ListItemIcon } from '@mui/material';
// hooks
import useLocales from '../../../hooks/useLocales';
// config
import { ICON } from '../../../config';
//
import Iconify from '../../Iconify';
import { ListItemStyle } from './style';

// ----------------------------------------------------------------------

const NavItem = forwardRef(({ item, depth, active, open, ...other }, ref) => {
  const { translate } = useLocales();

  const { title, icon, info, children, disabled, caption } = item;

  return (
    <ListItemStyle ref={ref} open={open} depth={depth} active={active} disabled={disabled} {...other}>
      {icon && (
        <ListItemIcon
          sx={{
            mr: 1,
            flexShrink: 0,
            width: ICON.NAVBAR_ITEM_HORIZONTAL,
            height: ICON.NAVBAR_ITEM_HORIZONTAL,
          }}
        >
          {icon}
        </ListItemIcon>
      )}

      <ListItemText
        primary={translate(title)}
        primaryTypographyProps={{
          noWrap: true,
          variant: active ? 'subtitle2' : 'body2',
        }}
      />

      {caption && (
        <Tooltip title={translate(caption)} arrow>
          <Box component="span" sx={{ ml: 0.5, lineHeight: 0 }}>
            <Iconify
              icon="eva:info-outline"
              sx={{
                width: ICON.NAVBAR_ITEM_HORIZONTAL / -4,
                height: ICON.NAVBAR_ITEM_HORIZONTAL / -4,
              }}
            />
          </Box>
        </Tooltip>
      )}

      {info && (
        <Box component="span" sx={{ ml: 1, lineHeight: 0 }}>
          {info}
        </Box>
      )}

      {!!children && (
        <Iconify
          icon={depth > 1 ? 'eva:chevron-right-fill' : 'eva:chevron-down-fill'}
          sx={{
            ml: 0.5,
            flexShrink: 0,
            width: ICON.NAVBAR_ITEM_HORIZONTAL,
            height: ICON.NAVBAR_ITEM_HORIZONTAL,
          }}
        />
      )}
    </ListItemStyle>
  );
});

NavItem.propTypes = {
  active: PropTypes.bool,
  open: PropTypes.bool,
  depth: PropTypes.number,
  item: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.any,
    info: PropTypes.any,
    caption: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
  }),
};

export default NavItem;
