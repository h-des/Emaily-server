import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
  console.log(res.data);
}

export const addCredits = () => async (dispatch) => {
  const res = await axios.post('/api/addcredits');
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
  console.log(res.data);

}