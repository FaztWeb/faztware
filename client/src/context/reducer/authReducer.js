import { AuthActions } from "../actions/authActions";

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  isLoggedIn: Boolean(token),
  user: null || user,
  token: "" || token,
  errorMessage: null,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AuthActions.AUTH_SIGNUP:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActions.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        user: payload.user,
        errorMessage: null,
        isLoggedIn: true,
      };
    case AuthActions.AUTH_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
        isLoggedIn: false,
      };
    case AuthActions.AUTH_SIGNIN:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActions.AUTH_SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        user: payload.user,
        errorMessage: null,
        isLoggedIn: true,
      };
    case AuthActions.AUTH_SIGNIN_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    case AuthActions.AUTH_LOGOUT:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        user: null,
        token: null,
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};
