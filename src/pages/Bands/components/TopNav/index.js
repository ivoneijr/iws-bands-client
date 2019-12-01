import React from 'react';
import Search from './Search';
import { Wrap, Logo } from './styles';
import logo from '../../../../assets/img/logo.png';

const TopNav = ({ query, onChange }) => (
  <Wrap>
    <Search value={query} onChange={onChange} />
    <Logo src={logo} />
  </Wrap>
);

export default TopNav;
