import { createContext, useEffect, useReducer, useContext } from "react";
import { getProducts, saveProduct } from "../../api/productsApi";
import { productsReducer, intialState } from "../reducer/productsReducer";
import { productActions } from "../actions/productsActions";

export const ProductContext = createContext(intialState);

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, intialState);

  const loadProducts = async () => {
    dispatch({ type: productActions.LOAD_PRODUCTS });
    try {
      const res = await getProducts();
      if (res.data) {
        dispatch({
          type: productActions.LOAD_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: productActions.LOAD_PRODUCTS_ERROR,
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addNewProduct = async (newProduct) => {
    dispatch({ type: productActions.LOAD_SAVE_PRODUCT });
    try {
      const res = await saveProduct(newProduct);

      if (res.data) {
        dispatch({
          type: productActions.LOAD_SAVE_PRODUCT_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: productActions.LOAD_SAVE_PRODUCT_ERROR,
        payload: error.message,
      });
    }
  };

  return (
    <ProductContext.Provider value={{ ...state, getProducts, addNewProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
