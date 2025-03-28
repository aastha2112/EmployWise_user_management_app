import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (page) => {
  const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
  return response.data;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, first_name, last_name, email }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`https://reqres.in/api/users/${id}`, {
        first_name,
        last_name,
        email,
      });
      toast.success("User updated successfully!");
      return { id, ...response.data };
    } catch (error) {
      toast.error("Failed to update user!");
      return rejectWithValue(error.response?.data || "Error updating user");
    }
  }
);

// Delete User
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      toast.success("User deleted successfully!");
      return id;
    } catch (error) {
      toast.error("Failed to delete user!");
      return rejectWithValue(error.response?.data || "Error deleting user");
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    page: 1,
    totalPages: 1,
    loading: false,
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load users";
      });
  },
});

export const { setPage } = usersSlice.actions;
export default usersSlice.reducer;
