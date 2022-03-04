export interface IActionType {
  type: string,
  payload?: {username: string, password: string}
}

export interface ILoginResponse {
  status_code: number,
  access_token?: string,
  refresh_token?: string,
  error?: string
}

export interface ITextProps {
  children: React.ReactNode;
  size: number;
  weight: number;
  color: string;
  opacity?: string; 
}

export interface IUserState {
  loginInfo: {},
  pending: Boolean,
  isLoggedIn: Boolean
}