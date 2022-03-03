import {
  LOGIN_REQUESTED, LOGIN_APPROVED, LOGIN_DECLINED,
} from "../actions/actionTypes";

interface userState {
  loginInfo: {},
  pending: Boolean,
}

const initialState: userState = {
  loginInfo: {},
  pending: false,
};

const userReducer = (state = initialState, action: { type: string, payload?: {email: string, password: string}}) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_APPROVED:
      return {
        ...state,
        pending: false,
        loginInfo: action.payload,
      };
    case LOGIN_DECLINED:
      return {
        ...state,
        pending: false,
        loginInfo: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;