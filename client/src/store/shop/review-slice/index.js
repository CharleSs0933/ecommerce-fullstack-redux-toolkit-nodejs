import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  reviews: [],
};

const apiUrl = import.meta.env.VITE_API_URL;

export const addReview = createAsyncThunk(
  "/review/addReview",
  async (formData) => {
    const result = await axios.post(`${apiUrl}/api/shop/review/add`, formData);
    return result?.data;
  }
);

export const getReviews = createAsyncThunk("/review/getReviews", async (id) => {
  const result = await axios.get(`${apiUrl}/api/shop/review/${id}`);
  return result?.data;
});

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload.data;
    });
    builder.addCase(getReviews.rejected, (state) => {
      state.isLoading = false;
      state.reviews = [];
    });
  },
});

export default reviewSlice.reducer;
