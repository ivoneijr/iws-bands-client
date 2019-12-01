import React from 'react';
import { ListItemText, Typography } from '@material-ui/core';

const Info = ({ plays, name }) => (
  <ListItemText
    primary={name}
    secondary={
      <>
        <Typography component="span">{plays} PLAYS</Typography>
      </>
    }
  />
);

export default Info;
