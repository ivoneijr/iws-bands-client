import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Bands = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/bands`)
      .then(res => setList(res.data));
  }, []);

  return (
    <>
      <ul>
        {list.map(band => (
          <li key={band.id}>
            <Link to={`/bands/${band.id}`}>{band.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Bands;
