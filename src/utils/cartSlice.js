import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCartItem: (state, action) => {
        // mutating the state here
      state.items.push(action.payload);
    },
    removeCartItem: (state) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    //   state.items.pop();
    },
    clearCartItems: (state) => {
      state.items = [];
    //   return { items: [] }     // Can also be used instead of above line
    },
  },
});

export const { addCartItem, removeCartItem, clearCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
