import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaShoppingCart, FaHistory } from "react-icons/fa";
import { IoIosMail, IoMdPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Header() {
  return (
    <div>
      <header>
        <nav className={`navbar navbar-expand-lg + ${styles.top_content}`}>
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FaPhoneAlt className={styles.icon} />
                    <span>+84 123456789</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <IoIosMail className={styles.icon} />
                    <span>nguyenvanA@mail.com</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FaLocationDot className={styles.icon} />
                    <span>123 phố Wall</span>
                  </a>
                </li>
              </ul>
              <a
                className="nav-link"
                href="#"
                style={{ position: "absolute", right: 300 }}
              >
                <IoMdPerson className={styles.icon} />
                <span> Log out</span>
              </a>
            </div>
          </div>
        </nav>

        <nav className={"navbar navbar-expand-lg"}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <h2>ElectroShop</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${styles.collapse}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className={`${styles.categories_dropdown} dropdown-toggle`}
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    All Categories
                  </a>
                  <div
                    className={`dropdown-menu + ${styles.categories_dropdown_item}`}
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      value 1
                    </a>
                    <a className="dropdown-item" href="#">
                      value 2
                    </a>
                    <a className="dropdown-item" href="#">
                      value 3
                    </a>
                  </div>
                </li>
              </ul>
              <input
                className={`${styles.categories_input}`}
                type="search"
                placeholder="Search here"
                aria-label="Search"
              />
              <button className={styles.categories_btn_submit} type="submit">
                Search
              </button>
              <div className={styles.order_cart}>
                <FaHistory
                  style={{
                    fontSize: 26,
                    position: "absolute",
                    right: 450,
                    top: 20,
                  }}
                />
                <p style={{ position: "absolute", right: 420, top: 50 }}>
                  Order History
                </p>
              </div>
              <div className={styles.order_cart}>
                <FaShoppingCart
                  style={{
                    fontSize: 26,
                    position: "absolute",
                    right: 350,
                    top: 20,
                  }}
                />
                <a style={{ position: "absolute", right: 350, top: 50 }}>
                  Cart
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section>
        <div className={`card text-center ${styles.Navigation}`}>
          <div className="container">
            <ul className="nav">
              <li className="nav-item">
                <a
                  className={`${styles.cate_item}  + ${styles.active}`}
                  href="#"
                >
                  Category 1
                </a>
              </li>
              <li className="nav-item">
                <a className={`${styles.cate_item}`} href="#">
                  Category 2
                </a>
              </li>
              <li className="nav-item">
                <a className={`${styles.cate_item}`} href="#">
                  Category 3
                </a>
              </li>
              <li className="nav-item">
                <a className={`${styles.cate_item}`} href="#">
                  Category 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
