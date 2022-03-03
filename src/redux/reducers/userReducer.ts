import {
  LOGIN_REQUESTED, LOGIN_APPROVED, LOGIN_DECLINED,
} from "../actions/actionTypes";

interface userState {
  loginInfo: {},
  pending: Boolean,
  // error: {},
}

const initialState: userState = {
  loginInfo: {},
  pending: false,
  // error: null,
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
        // error: null,
      };
    case LOGIN_DECLINED:
      return {
        ...state,
        pending: false,
        loginInfo: {},
        // error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;