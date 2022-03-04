import {
  LOGIN_REQUESTED, LOGIN_APPROVED, LOGIN_DECLINED,
} from "../actions/actionTypes";
import type { IActionType } from '../../types/types';
import { IUserState } from "../../types/types";

const initialState: IUserState = {
  loginInfo: {},
  pending: false,
  isLoggedIn: false
};

const userReducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        pending: true,  
        isLoggedIn: false
      };
    case LOGIN_APPROVED:
      return {
        ...state,
        pending: false,
        loginInfo: action.payload,
        isLoggedIn: true
      };
    case LOGIN_DECLINED:
      return {
        ...state,
        pending: false,
        isLoggedIn: false,
        loginInfo: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;