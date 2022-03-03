import {
  LOGIN_REQUESTED, LOGIN_APPROVED, LOGIN_DECLINED,
} from './actionTypes';

export const requestLogin = (payload: {email: string, password : string}) => ({ type: LOGIN_REQUESTED, payload });
export const approveLogin = (payload: {}) => ({ type: LOGIN_APPROVED, payload });
export const declineLogin = (error: {}) => ({ type: LOGIN_DECLINED, error });