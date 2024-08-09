import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import statusCode from "../utils/statusCode";
const initialState = { data: [], status: statusCode.IDLE };
const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = statusCode.LOADING;
      })

      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = statusCode.IDLE;
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = statusCode.ERROR;
      });
  },
});
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});
