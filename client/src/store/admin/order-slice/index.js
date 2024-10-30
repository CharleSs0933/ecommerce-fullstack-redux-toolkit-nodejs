import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orderList: [],
  orderDetails: null,
};

const apiUrl = import.meta.env.VITE_API_URL;

export const getAllOrdersForAdmin = createAsyncThunk(
  "order/getAllOrdersForAdmin",
  async () => {
    const result = await axios.get(`${apiUrl}/api/admin/orders/get`);

    return result?.data;
  }
);

export const getOrderDetailsForAdmin = createAsyncThunk(
  "order/getOrderDetailsForAdmin",
  async (id) => {
    const result = await axios.get(`${apiUrl}/api/admin/orders/details/${id}`);

    return result?.data;
  }
);

export const updateOrderStatus = createAsyncThunk(
  "order/updateOrderStatus",
  async ({ id, orderStatus }) => {
    const result = await axios.put(`${apiUrl}/api/admin/orders/update/${id}`, {
      orderStatus,
    });

    return result?.data;
  }
);

const adminOrderSlice = createSlice({
  name: "adminOrder",
  initialState,
  reducers: {
    resetOrderDetails: (state, action) => {
      state.orderDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrdersForAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      })
      .addCase(getAllOrdersForAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.orderList = [];
      })
      .addCase(getOrderDetailsForAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetailsForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getOrderDetailsForAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.orderDetails = null;
      });
  },
});

export const { resetOrderDetails } = adminOrderSlice.actions;

export default adminOrderSlice.reducer;
