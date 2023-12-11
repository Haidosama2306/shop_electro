import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoginPage from "./auth/Login";
import RegisterPage from "./auth/Register";
import RootPage from "./global/root";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";

function App() {
  const [isLoggedIn, setLogin]=useState(false)

  useEffect(()=>{
    const bearerToken = localStorage.getItem('auth_token');
    const headers = {
  'Authorization': `Bearer ${bearerToken}`,
  'Content-Type': 'application/json',

};
    axios.post('http://localhost:5000/auth/checkLogin',{}, {headers: headers})
    .then((check)=>{
      setLogin(true)
    })
    .catch(()=>{
      setLogin(false)
    })
    if (!isLoggedIn) {
    }
  },[isLoggedIn])
  
  return (
    <Routes>
      {isLoggedIn?(
        <Route element={<RootPage />} path="/">
        <Route element={<HomePage />} path=""/>
        <Route element={<HomePage />} path="/home"/>
        <Route element={<DetailPage />} path="/detail" />
      </Route>
      ):(
        <Route path="/">
            <Route element={<LoginPage />} path="/"/>
            <Route element={<RegisterPage />} path="/register" />
          </Route>
      )}
    </Routes>
  );
}

export default App;
