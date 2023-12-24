import { Route, Routes } from "react-router-dom";
import LoginPage from "./auth/Login";
import RegisterPage from "./auth/Register";
import RootPage from "./global/root";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import OrderPage from "./pages/Order";

function App() {
  return (
    <Routes >
      <Route element={<RootPage path="/"/>}>
        <Route element={<HomePage />} path="/" />
        <Route element={<HomePage />} path="/home" />
        <Route element={<DetailPage />} path="/detail/:id" />
        <Route element={<OrderPage />} path="/order" />

      </Route>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
    </Routes>
  );
}

export default App;
