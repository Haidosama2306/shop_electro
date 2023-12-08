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
          <Route element={<HomePage />} index path="/" />
          <Route element={<DetailPage />} path="/detail/:product_id" />
        </Route>
    </Route>
  )
);
