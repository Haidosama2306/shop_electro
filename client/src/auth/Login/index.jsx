import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth';
import { loginState$ } from '../../redux/selectors';

function LoginPage() {
  const [data, setData] = useState({ username: "", password: "" });
  const [err, setErr] = useState();
  const dispatch = useDispatch();
  const selector = useSelector(loginState$);

  const handleLogin = useCallback(() => {
    dispatch(login.loginRequest(data));
  }, [data, dispatch]);

  // console.log('data: ',data);

  useEffect(() => {
    if (selector.auth || localStorage.getItem("auth_token")) {
      window.location.href = "/home";
    } else {
      setErr(selector.data.err);
    }
  });

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h1>Login</h1>
        <div className={styles.input_box}>
          <input type="text" onChange={(e)=>setData({...data, username: e.target.value})} placeholder="Username" required />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles.log_err}>{err ? err[0]?.username :''}</div>

        <div className={styles.input_box}>
          <input type="password" onChange={(e)=>setData({...data, password: e.target.value})} placeholder="Password" required />
          <FaLock className={styles.icon} />
        </div>
        <div className={styles.log_err}>{err ? (err[1]?.password || err[0]?.password) :''}</div>

        <div className={styles.remember_forgot}>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="/register">
            <div className={styles.p_link}>
              <span>Forgot Password?</span>
            </div>
          </Link>
        </div>
        <button type="submit" onClick={handleLogin}>Login</button>
        <div className={styles.register_link}>
          <p>
            Don't have an account?
            <Link to="/register">
              <span> Register </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
