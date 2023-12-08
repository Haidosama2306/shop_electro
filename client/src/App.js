import { RouterProvider } from 'react-router-dom'
import { router } from './router/index';
import { authrouter } from './router/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Login from './auth/Login';
import axios from 'axios';

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
      console.log(check);
      setLogin(true)
    })
    .catch(()=>{
      setLogin(false)
    })
    console.log(isLoggedIn);
    if (!isLoggedIn) {
    }
  },[isLoggedIn])
  
  return (
    <RouterProvider router={isLoggedIn? router : authrouter} />
  );
}

export default App;
