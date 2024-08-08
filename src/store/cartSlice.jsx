import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const item = { id: nanoid(), product: action.payload };
      state.push(item);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload); // Return the filtered state
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
