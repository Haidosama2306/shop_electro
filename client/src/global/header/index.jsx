import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaShoppingCart, FaHistory } from "react-icons/fa";
import { IoIosMail, IoMdPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Navigation from "../../components/Navigations";
import { categories } from "../../commom/data/catelories";

function Header() {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const bearerToken = localStorage.getItem("auth_token");
    const headers = {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    };
    axios
      .post("http://localhost:5000/auth/checkLogin", {}, { headers: headers })
      .then((check) => {
        setLogin(true);
      })
      .catch(() => {
        setLogin(false);
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
        localStorage.removeItem("auth_name");
      });
    console.log("isLogin: ", isLogin);
  }, [isLogin]);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    localStorage.removeItem("auth_name");
    window.location.href = "/";
  };
  
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg top_content">
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
                    <FaPhoneAlt className="icon" />
                    <span>+84 123456789</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <IoIosMail className="icon" />
                    <span>ElectroShop@mail.com</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FaLocationDot className="icon" />
                    <span>123 phố Wall</span>
                  </a>
                </li>
              </ul>
              {isLogin ? (
                <>
                  <span
                    style={{ position: "absolute", right: 450, paddingTop: 2 }}
                  >
                    {localStorage.getItem("auth_name")}
                  </span>
                  <a
                    className="nav-link"
                    href="#"
                    style={{ position: "absolute", right: 300 }}
                    onClick={handleLogout}
                  >
                    <IoMdPerson className="icon" />

                    <span> Log out</span>
                  </a>
                </>
              ) : (
                <Link
                  className="nav-link"
                  style={{ position: "absolute", right: 300 }}
                  to="/login"
                >
                  <IoMdPerson className="icon" />
                  <span> Login</span>
                </Link>
              )}
            </div>
          </div>
        </nav>

        <nav className={"navbar navbar-expand-lg"}>
          <div className="container">
            <a className="logo_banner + navbar-brand" style={{cursor:'pointer'}} href="/">
              <h2>
                Electro<span>Shop</span>.
              </h2>
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
              className="collapse navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="categories_dropdown dropdown-toggle"
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
                    className="dropdown-menu categories_dropdown_item"
                    aria-labelledby="navbarDropdown"
                  >
                    {categories.map((categorie, i) => {
                      return (
                        <a key={categorie} className="dropdown-item" href="#">
                          {categorie.categories_name}
                        </a>
                      );
                    })}
                  </div>
                </li>
              </ul>
              <input
                className="categories_input"
                type="search"
                placeholder="Search here"
                aria-label="Search"
              />
              <button className="categories_btn_submit" type="submit">
                Search
              </button>
              <div className="order_cart">
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
              <div className="order_cart">
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
        <Navigation navigations={categories} />
      </section>
    </div>
  );
}

export default Header;
