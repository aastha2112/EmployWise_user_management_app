import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        credentials
      );
      localStorage.setItem("token", response.data.token);
      return response.data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue("Invalid email or password");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { token: localStorage.getItem("token") || null, error: null },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
