import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import payment from "../services/odevserver/controllers/payment";
const initialState = {
  value: {},
  status: "idle",
};

export const fetchPaymentResult = createAsyncThunk(
  "packages/fetchPaymentResult",
  async () => {
    const response = await payment.list();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const makePayment = createAsyncThunk("user/signUp", async (payload) => {
  const response = await payment.create(payload);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},

  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(makePayment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export default paymentSlice.reducer;
