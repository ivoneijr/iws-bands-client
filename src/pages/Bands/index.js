import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchBands,
  filterBy,
  fetchOrderBy,
  fetchAlbums,
  fetchProperty,
} from '../../store/ducks/bands';
import TopNav from './components/TopNav';
import List from './components/List';
import OrderBy from './components/OrderBy';
import Details from './components/Details';

const Bands = () => {
  const state = useSelector(state => state.bands.toJS());
  const dispatch = useDispatch();
  const { list, query, filtered, asc, showDetails, selectedBand } = state;

  useEffect(() => {
    dispatch(() => fetchBands(dispatch));
    dispatch(() => fetchAlbums(dispatch));
  }, []);

  const fetchQuey = ({ target: { value } }) => filterBy(value, list, dispatch);

  const orderBy = property => fetchOrderBy(property, filtered, asc, dispatch);

  const toggleDetails = (_event, band) => {
    fetchProperty('selectedBand', band || {}, dispatch);
    fetchProperty('showDetails', !showDetails, dispatch);
  };

  return (
    <>
      <TopNav query={query} onChange={fetchQuey} length={filtered.length} />
      <OrderBy onClick={orderBy} length={filtered.length} />
      <List list={filtered} onClickItem={toggleDetails} />
      <Details
        isOpen={showDetails}
        toggleDetails={toggleDetails}
        selectedBand={selectedBand}
      />
    </>
  );
};

export default Bands;
