import React from "react";
import styles from "./styles.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h1>Register</h1>
        <div className={styles.input_box}>
          <input type="text" placeholder="Username" required />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles.input_box}>
          <input type="password" placeholder="Password" required />
          <FaLock className={styles.icon} />
        </div>
        <div className={styles.input_box}>
          <input type="password" placeholder="Confirm Password" required />
          <FaLock className={styles.icon} />
        </div>
        <button type="submit">Register</button>
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
