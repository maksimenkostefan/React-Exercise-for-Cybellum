import {
  LOGIN_REQUESTED, LOGIN_APPROVED, LOGIN_DECLINED,
} from './actionTypes';

export const requestLogin = (payload: {username: string, password : string}) => ({ type: LOGIN_REQUESTED, payload });
export const approveLogin = () => ({ type: LOGIN_APPROVED });
export const declineLogin = (error: {}) => ({ type: LOGIN_DECLINED, error });