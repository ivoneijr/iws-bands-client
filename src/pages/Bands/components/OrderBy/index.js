import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Wrap, Counter, Options, Icon } from './styles';
import logo from '../../../../assets/img/order_by.png';

export default function OrderBy({ onClick, length }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    length > 0 && (
      <Wrap>
        <Counter>{length} result(s)</Counter>
        <Options>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Icon src={logo} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => onClick('name')}>Aplhabetical</MenuItem>
            <MenuItem onClick={() => onClick('numPlays')}>Popularity</MenuItem>
          </Menu>
        </Options>
      </Wrap>
    )
  );
}
