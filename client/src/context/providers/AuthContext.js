import { createContext, useContext, useReducer } from "react";
import { register, profile } from "../../api/authApi";
import { AuthActions } from "../actions/authActions";
import { initialState, authReducer } from "../reducer/authReducer";

export const AuthContext = createContext(initialState);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signup = async ({ email, password }) => {
    dispatch({ type: AuthActions.AUTH_SIGNUP });
    try {
      const res = await register({ email, password });
      const { token } = res.data;

      console.log(token)

      const resUser = await profile(token);

      dispatch({
        type: AuthActions.AUTH_SIGNUP_SUCCESS,
        payload: {
          token,
          user: resUser.data,
        },
      });
    } catch (error) {
      if (error.response.data) {
        console.log(error);
        dispatch({
          type: AuthActions.AUTH_SIGNUP_ERROR,
          payload: error.response.statusText,
        });
      }
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
