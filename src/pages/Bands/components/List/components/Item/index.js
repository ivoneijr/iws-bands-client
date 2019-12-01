import React from 'react';
import { ListItem, Divider } from '@material-ui/core';

import Avatar from './Avatar';
import Info from './Info';

const Item = ({ item: { image, numPlays, name }, onClick }) => (
  <>
    <ListItem onClick={onClick}>
      <Avatar src={image} />
      <Info plays={numPlays} name={name} />
    </ListItem>
    <Divider />
  </>
);

export default Item;
