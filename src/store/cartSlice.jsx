import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItem = state.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        const item = { id: nanoid(), product: action.payload, quantity: 1 };
        state.push(item); // Add new item with quantity 1
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload); // Return the filtered state
    },
    increaseQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1; // Increase the quantity of the item
      }
    },
    decreaseQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrease the quantity of the item
      }
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
