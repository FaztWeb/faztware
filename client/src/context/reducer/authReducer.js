import { AuthActions } from "../actions/authActions";

export const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
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
        isLoggedIn: true,
      };
    case AuthActions.AUTH_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
