import { fromJS } from 'immutable';
import axios from 'axios';

/**
 * ACTION TYPES
 */
export const SET_PROPERTY = 'bands/SET_PROPERTY';
export const FETCH_BANDS = 'bands/FETCH_BANDS';

/**
 * DEFAULT STATE
 */
const DEFAULT_STATE = fromJS({
  error: '',
  query: '',
  list: [],
  filtered: [],
  asc: true,
});

/**
 * REDUCER
 */
const reducer = (state = DEFAULT_STATE, action = {}) => {
  const { type: actionType, data, property } = action;

  const fns = {
    [SET_PROPERTY]: () => state.setIn([property], fromJS(data)),
  };

  return actionType in fns ? fns[actionType]() : state;
};

/**
 * THUNK ACTION CREATORS
 */
export const fetchProperty = (property, data) => dispatch => {
  dispatch({ type: SET_PROPERTY, property, data });
};

export const fetchBands = async dispatch => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/bands`;
    const { data } = await axios.get(url);

    dispatch({ type: SET_PROPERTY, property: 'list', data });
    dispatch({ type: SET_PROPERTY, property: 'filtered', data });
  } catch ({ message: data }) {
    dispatch({ type: SET_PROPERTY, property: 'error', data });
  }
};

export const filterBy = async (query, list, dispatch) => {
  dispatch({ type: SET_PROPERTY, property: 'query', data: query });

  const filtered = list.filter(band =>
    band.name.toLowerCase().includes(query.toLowerCase())
  );

  dispatch({ type: SET_PROPERTY, property: 'filtered', data: filtered });
};

export const fetchOrderBy = async (property, list, asc, dispatch) => {
  const sorted = list.sort((a, b) => {
    if (a[property] > b[property]) {
      return asc ? -1 : 1;
    }
    if (a[property] < b[property]) {
      return asc ? 1 : -1;
    }
    return 0;
  });

  dispatch({ type: SET_PROPERTY, property: 'filtered', data: sorted });
  dispatch({ type: SET_PROPERTY, property: 'asc', data: !asc });
};

export default reducer;
