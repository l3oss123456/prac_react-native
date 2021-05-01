import * as R from 'ramda';
import {
  FETCHING_DATA,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_SUCCESS,
} from '../constants';
import loadData from './api';

export const setStageToSuccess = data => ({
  type: FETCHING_DATA_SUCCESS,
  payload: data,
});

export const setStageToFetching = data => ({
  type: FETCHING_DATA,
});

export const setStageToFailure = data => ({
  type: FETCHING_DATA_FAILURE,
  payload: data,
});

export const fetchData = () => {
  return async dispatch => {
    dispatch(setStageToFetching());
    const resp = await loadData();
    if (!R.isEmpty(resp)) {
      dispatch(setStageToSuccess(resp));
    } else {
      dispatch(setStageToFailure);
    }
    // loadData()
    //   .then(result => {
    //     console.log(result);
    //     dispatch(setStageToSuccess(result));
    //   })
    //   .catch(error => {
    //     dispatch(setStageToFailure);
    //   });
  };
};
