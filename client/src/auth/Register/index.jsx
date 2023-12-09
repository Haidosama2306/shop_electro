import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginState$ } from '../../redux/selectors';
import { register } from '../../redux/actions/auth';

function RegisterPage() {
  const [data, setData] = useState({username: '', password: ''})
  const [err, setErr] = useState();
  const dispatch =  useDispatch();
  const navigator = useNavigate();
  const selector = useSelector(loginState$);
  const handleRegister  =  useCallback(()=>{
      dispatch(register.registerRequest(data))
  },[data, dispatch])
  useEffect(()=>{
      if (selector.auth && localStorage.getItem('auth_token')) {
          navigator('/')
          localStorage.setItem('token', selector.data.token)
      }else{
          setErr(selector.data.err)
      }
  },[ selector])

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h1>Register</h1>
        <div className={styles.input_box}>
          <input type="text" onChange={e=>setData({...data, username: e.target.value})} placeholder="Username" required />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles.input_box}>
          <input type="password" onChange={e=>setData({...data, password: e.target.value})} placeholder="Password" required />
          <FaLock className={styles.icon} />
        </div>
        <button type="submit" onClick={handleRegister}>Register</button>
        <div className={styles.login_link}>
          <p> Have an account?
            <Link to={"/"}>
              <span> Login </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
