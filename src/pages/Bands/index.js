import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBands, filterBy, fetchOrderBy } from '../../store/ducks/bands';
import Header from './components/Header';
import List from './components/List';
import OrderBy from './components/OrderBy';

const Bands = () => {
  const state = useSelector(state => state.bands.toJS());
  const dispatch = useDispatch();
  const { list, query, filtered, asc, error } = state;

  useEffect(() => {
    dispatch(() => fetchBands(dispatch));
  }, []);

  const fetchQuey = ({ target: { value } }) => {
    filterBy(value, list, dispatch);
  };

  const orderBy = property => {
    fetchOrderBy(property, filtered, asc, dispatch);
  };

  return (
    <>
      {error}
      <Header query={query} onChange={fetchQuey} />
      <OrderBy onClick={orderBy} />
      <List list={filtered} />
    </>
  );
};

export default Bands;
