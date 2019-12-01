import React from 'react';
import { ListItem, Divider } from '@material-ui/core';

import Avatar from './Avatar';
import Info from './Info';

const Item = ({ item, onClick }) => (
  <>
    <ListItem onClick={() => onClick(null, item)}>
      <Avatar src={item.image} />
      <Info plays={item.numPlays} name={item.name} />
    </ListItem>
    <Divider />
  </>
);

export default Item;
