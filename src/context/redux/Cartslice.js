import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtocart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload.id; // Assuming the payload contains the ID of the item to remove
      state.cart = state.cart.filter((item) => item.id !== itemIdToRemove);
    },
    
  },
});

export default cartSlice.reducer;
export const { addtocart , removeFromCart} = cartSlice.actions;
