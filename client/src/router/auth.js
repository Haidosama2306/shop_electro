import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Register";
import HomePage from "../pages/Home";

export const authrouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/">
            <Route element={<LoginPage />} path="/"/>
            <Route element={<RegisterPage />} path="/register" />
            <Route element={<HomePage />} path="/home"/>
          </Route>
      </Route>
    )
  );