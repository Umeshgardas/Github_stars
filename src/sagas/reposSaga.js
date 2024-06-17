// src/sagas/reposSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchReposRequest, fetchReposSuccess, fetchReposFailure } from '../reducers/reposSlice';

function* fetchRepos(action) {
  const { date, page } = action.payload;
  try {
    const response = yield call(axios.get, `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`);
    yield put(fetchReposSuccess(response.data.items));
  } catch (error) {
    yield put(fetchReposFailure(error.message));
  }
}

function* reposSaga() {
  yield takeLatest(fetchReposRequest.type, fetchRepos);
}

export default reposSaga;
