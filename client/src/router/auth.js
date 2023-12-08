import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Register";

export const authrouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/">
            <Route element={<LoginPage />} index path="/"/>
            <Route element={<RegisterPage />} path="/register" />

          </Route>
      </Route>
    )
  );