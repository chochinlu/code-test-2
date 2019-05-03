import { GET_FLIGHTS } from '../redux/actionTypes';
import { fetching, getFlightsFail, setFlights } from '../redux/actions';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { getFlightAsync } from './api';

function* getFlightsSaga({ payload }) {
  const { cabin } = payload;

  try {
    yield put(fetching(cabin));
    const { data } = yield call(getFlightAsync, cabin);
    yield put(
      setFlights({
        flightType: cabin,
        flights: data
      })
    );
  } catch (err) {
    yield put(
      getFlightsFail({
        errType: cabin,
        msg: err.message
      })
    );
  } finally {
    yield put(fetching(cabin));
  }
}

function* watchGetFlights() {
  yield takeEvery(GET_FLIGHTS, getFlightsSaga);
}

export default function* rootSaga() {
  yield all([watchGetFlights()]);
}
