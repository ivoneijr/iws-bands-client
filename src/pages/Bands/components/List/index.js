import React from 'react';
import { List as MuiList } from '@material-ui/core';
import Item from './components/Item';

const BandList = ({ list, onClickItem }) => (
  <MuiList>
    {list.map(band => (
      <Item key={band.id} item={band} onClick={onClickItem} />
    ))}
  </MuiList>
);

export default BandList;
