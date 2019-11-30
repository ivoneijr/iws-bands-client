import { fromJS } from 'immutable';
import axios from 'axios';

/**
 * ACTION TYPES
 */
export const SET_PROPERTY = 'bands/SET_PROPERTY';
export const SET_DEFAULT = 'bands/SET_DEFAULT';
export const FETCH_BANDS = 'bands/FETCH_BANDS';

/**
 * DEFAULT STATE
 */
const DEFAULT_STATE = fromJS({
  error: '',
  list: [],
});

/**
 * REDUCER
 */
const reducer = (state = DEFAULT_STATE, action = {}) => {
  const { type: actionType, data, property } = action;

  const fns = {
    [SET_DEFAULT]: () => DEFAULT_STATE,
    [SET_PROPERTY]: () => state.setIn([property], fromJS(data)),
  };

  return actionType in fns ? fns[actionType]() : state;
};

/**
 * THUNK ACTION CREATORS
 */
export const setDefaultState = () => dispatch =>
  dispatch({ type: SET_DEFAULT });

export const fetchProperty = (property, data) => dispatch =>
  dispatch({ type: SET_PROPERTY, property, data });

export const fetchBands = () => dispatch => {
  const url = `${process.env.REACT_APP_API_URL}/bands`;

  axios.get(url).then(response => {
    const { data } = response;

    dispatch({ type: SET_PROPERTY, property: 'list', data });
  });
};

export default reducer;
