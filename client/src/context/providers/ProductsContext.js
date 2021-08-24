import { createContext, useEffect, useReducer } from "react";
import { getProducts } from "../../api/productsApi";
import { productsReducer, intialState } from "../reducer/productsReducer";
import { productActions } from "../actions/productsActions";

export const ProductContext = createContext(intialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, intialState);

  const loadProducts = async () => {
    dispatch({ type: productActions.LOAD_PRODUCTS });
    const res = await getProducts();
    if (res.data) {
      dispatch({
        type: productActions.LOAD_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
