import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUser = createAsyncThunk(
  "post/postUser",
  async (formValues) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/",
      formValues
    );

    return response.data;
  }
);

export const postNewUser = createAsyncThunk(
  "post/newUser",
  async (userData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/new",
      userData
    );

    return response.data;
  }
);
