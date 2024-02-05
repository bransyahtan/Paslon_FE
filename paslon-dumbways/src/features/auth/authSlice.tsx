import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api/authApi";
import axios from "axios";

export interface AuthState {
  token: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  token: "",
  isLoading: false,
};

interface LoginFormData {
  // Define the structure of your form data
  username: string;
  password: string;
  // Add other fields as needed
}

export const login = createAsyncThunk(
  "login",
  async (formData: LoginFormData) => {
    try {
      const response = await authAPI.post("/login", formData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error.response!.data.message;
      }
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.setItem("token", action.payload.token);
      });
  },
});

export default authSlice.reducer;
