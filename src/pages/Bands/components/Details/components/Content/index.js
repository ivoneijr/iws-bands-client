import React from 'react';

const Content = ({ band }) => {
  return band && <div>{band.name}</div>;
};

export default Content;
