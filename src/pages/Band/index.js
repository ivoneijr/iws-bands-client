import React from 'react';
import { useParams } from 'react-router-dom';
const Band = () => {
  const { bandId } = useParams();

  return <>Band details Page for id {bandId}</>;
};

export default Band;
