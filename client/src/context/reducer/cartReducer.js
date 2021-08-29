import { CartActions } from "../actions/CartActions";

export const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const initializer = (initialState = initialState) =>
  JSON.parse(localStorage.getItem("cart")) || initialState;

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActions.APPEND_ITEM: {
      const newItems = state.items.find((item) => item._id === payload.item._id)
        ? state.items.map((item) =>
            item._id === payload.item._id
              ? { ...item, quantity: item.quantity + payload.increment }
              : item
          )
        : [...state.items, { ...payload.item, quantity: 1 }];

      const totalPrice = newItems.reduce(
        (total, { price, quantity }) => total + price * quantity,
        0
      );

      return {
        ...state,
        items: newItems,
        totalItems: state.totalItems + payload.increment,
        totalPrice,
      };
    }
    case CartActions.REMOVE_ITEM: {
      const itemFound = state.items.find((item) => item._id === payload._id);
      const items = state.items.filter((item) => item._id !== payload._id);

      const totalPrice = items.reduce(
        (total, { price, quantity }) => total + price * quantity,
        0
      );

      return {
        ...state,
        items,
        totalItems: state.totalItems - itemFound.quantity,
        totalPrice,
      };
    }
    case CartActions.DECREMENT_ITEM: {
      const items =
        state.items.find((item) => item._id === payload.item._id).quantity === 1
          ? state.items.filter((item) => item._id !== payload.item._id)
          : state.items.map((item) =>
              item._id === payload.item._id
                ? { ...item, quantity: item.quantity - payload.decrement }
                : item
            );

      const totalPrice = items.reduce(
        (total, { price, quantity }) => total + price * quantity,
        0
      );
      return {
        ...state,
        items,
        totalPrice,
        totalItems: state.totalItems - payload.decrement,
      };
    }
    case CartActions.CLEAR_CART: {
      return initialState;
    }

    default:
      return state;
  }
};
