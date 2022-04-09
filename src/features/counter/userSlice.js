import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "../../services/odevserver/controllers/auth";
const initialState = {
  value: {},
  status: "idle",
};

export const signUp = createAsyncThunk("user/signUp", async (payload) => {
  const response = await auth.signup(payload);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},

  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});


export default userSlice.reducer;
