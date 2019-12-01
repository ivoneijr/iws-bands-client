import React from 'react';
import { ListItemAvatar, Avatar as MuiAvatar } from '@material-ui/core';

const Avatar = ({ src }) => (
  <ListItemAvatar>
    <MuiAvatar src={src} />
  </ListItemAvatar>
);

export default Avatar;
