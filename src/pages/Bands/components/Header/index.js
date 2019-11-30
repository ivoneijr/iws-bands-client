import React from 'react';

const Header = ({ query, onChange }) => (
  <>
    <input value={query} onChange={onChange} type="text" />
  </>
);

export default Header;
