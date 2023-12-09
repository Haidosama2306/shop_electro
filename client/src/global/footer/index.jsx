import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="newsletter" style={{ paddingTop: 20 }}>
          <p style={{ fontSize: 28 }}>
            Sign Up for the <strong>NEWSLETTER</strong>
          </p>
        </div>
        <div className={""}>
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
        <div className={styles.information}>
        <div className="row">
          <div className="col-md-4">
            <h5>About me</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias tenetur suscipit maiores qui, consectetur perspiciatis
              facilis ipsam itaque quaerat voluptas distinctio quibusdam ut
              totam. Obcaecati ipsum rerum exercitationem alias amet?
            </p>
          </div>
          <div className="col-md-4">
          <h5>Categories</h5>
            <ul>
              <li>Lorem ipsum dolor !</li>
              <li>Lorem ipsum dolor !</li>
              <li>Lorem ipsum dolor !</li>
            </ul>
          </div>
          <div className="col-md-4">
          <h5>Contact Us</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias tenetur suscipit maiores qui, consectetur perspiciatis
              facilis ipsam itaque quaerat voluptas distinctio quibusdam ut
              totam. Obcaecati ipsum rerum exercitationem alias amet?
            </p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
