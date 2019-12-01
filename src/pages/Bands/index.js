import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchBands,
  filterBy,
  fetchOrderBy,
  fetchAlbums,
} from '../../store/ducks/bands';
import TopNav from './components/TopNav';
import List from './components/List';
import OrderBy from './components/OrderBy';
import Details from './components/Details';

const Bands = () => {
  const state = useSelector(state => state.bands.toJS());
  const dispatch = useDispatch();
  const { list, query, filtered, asc, error } = state;

  useEffect(() => {
    dispatch(() => fetchBands(dispatch));
    dispatch(() => fetchAlbums(dispatch));
  }, []);

  function fetchQuey({ target: { value } }) {
    filterBy(value, list, dispatch);
  }

  function orderBy(property) {
    fetchOrderBy(property, filtered, asc, dispatch);
  }

  return (
    <>
      {error}
      <TopNav query={query} onChange={fetchQuey} />
      <OrderBy onClick={orderBy} length={filtered.length} />
      <List list={filtered} />
      <Details />
    </>
  );
};

export default Bands;
