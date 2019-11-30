import React from 'react';
import { Link } from 'react-router-dom';
const List = ({ list }) =>
  list && (
    <>
      <ul>
        {list.map(band => (
          <li key={band.id}>
            <Link to={`/bands/${band.id}`}>{band.name}</Link>({band.numPlays})
          </li>
        ))}
      </ul>
    </>
  );

export default List;
