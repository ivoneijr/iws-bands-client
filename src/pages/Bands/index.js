import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchBands,
  filterBy,
  fetchOrderBy,
  fetchAlbums,
} from '../../store/ducks/bands';
import Header from './components/Header';
import List from './components/List';
import OrderBy from './components/OrderBy';

import { Wrap } from './styles';

const Bands = () => {
  const state = useSelector(state => state.bands.toJS());
  const dispatch = useDispatch();
  const { list, query, filtered, asc, error } = state;

  useEffect(() => {
    dispatch(() => fetchBands(dispatch));
    dispatch(() => fetchAlbums(dispatch));
  }, []);

  const fetchQuey = ({ target: { value } }) => {
    filterBy(value, list, dispatch);
  };

  const orderBy = property => {
    fetchOrderBy(property, filtered, asc, dispatch);
  };

  return (
    <Wrap>
      {error}
      <Header query={query} onChange={fetchQuey} />
      <OrderBy onClick={orderBy} />
      <List list={filtered} />
    </Wrap>
  );
};

export default Bands;
