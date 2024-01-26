import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { refreshUser } from "../Store/userSlice";

export const PrivateRoute = ({ children }) => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(refreshUser(token));
    }
  }, [token]);

  if (!state.user.token && !token) {
    return <Navigate to="/" />;
  }

  return children;
};
