import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  approvalURL: null,
  isLoading: false,
  orderId: null,
};

const apiUrl = import.meta.env.VITE_API_URL;

export const createNewOrder = createAsyncThunk(
  "order/createNewOrder",
  async (orderData) => {
    const result = await axios.post(
      `${apiUrl}/api/shop/order/create`,
      orderData
    );

    return result?.data;
  }
);

const shoppingOrderSlice = createSlice({
  name: "shoppingOrder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.approvalURL = action.payload.approvalURL;
        state.orderId = action.payload.orderId;
      })
      .addCase(createNewOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.approvalURL = null;
        state.orderId = null;
      });
  },
});

export default shoppingOrderSlice.reducer;
