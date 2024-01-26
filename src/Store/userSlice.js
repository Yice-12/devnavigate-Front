import { createSlice } from "@reduxjs/toolkit";
import { postNewUser, postUser } from "../services/user";
import { jwtDecode } from "jwt-decode";

export const initialState = {
  user: {},
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    refreshUser: (state, action) => {
      const decodedToken = jwtDecode(action.payload);
      state.user.token = action.payload;
      state.user.name = decodedToken.name;
      state.user.id = decodedToken.id;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = {};
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem("token", action.payload.token);
        state.loading = false;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(postNewUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(postNewUser.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem("token", action.payload.token);
        state.loading = false;
      })
      .addCase(postNewUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { refreshUser, logout } = userSlice.actions;
