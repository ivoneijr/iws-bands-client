import React from 'react';
import { useParams } from 'react-router-dom';
const Band = () => {
  const { bandId } = useParams();

  return <div>Band details Page for id {bandId}</div>;
};

export default Band;
