import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootPage from "../global/root";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Detail";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route element={<RootPage />} path="/">
          <Route element={<HomePage />} path=""/>
          <Route element={<HomePage />} path="/home"/>
          <Route element={<DetailPage />} path="/detail" />
        </Route>
    </Route>
  )
);
