import React from 'react';
import logo from '../../../../assets/img/search.png';
import { SearchWrap as Wrap, SearchLogo as Logo, SearchInput } from './styles';

const Search = ({ value, onChange }) => (
  <Wrap>
    <Logo src={logo} />
    <SearchInput
      value={value}
      onChange={onChange}
      type="search"
      name="search"
      placeholder="Search..."
    />
  </Wrap>
);

export default Search;
