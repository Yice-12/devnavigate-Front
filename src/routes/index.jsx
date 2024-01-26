import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Loading } from "../Components/Loading";
import { useSelector } from "react-redux";
import { CreateAccount } from "../pages/CreateAccount";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  const state = useSelector((state) => state.user);
  return (
    <div>
      {state.loading && <Loading />}
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/create-acount" element={<CreateAccount />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};
