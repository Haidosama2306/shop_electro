import styles from "./styles.module.css";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-12">
          <div className="newsletter">
            <p>
              Sign Up for the <strong>NEWSLETTER</strong>
            </p>
            <div id="sEmail"></div>

            <input
              className={styles.email_input}
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <button name="submit-newsletter" className={styles.email_btn}>
              <i class="fa fa-envelope"></i> Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
