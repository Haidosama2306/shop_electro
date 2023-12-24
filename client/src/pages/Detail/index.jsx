import styles from "../Detail/styles.module.css";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaStar, FaShoppingCart } from "react-icons/fa";

import { Laptop } from "../../commom/data/lapTop";
import Slider from "react-slick";

function DetailPage() {
  let isLogin = false;

  if (localStorage.getItem("auth_token")) {
    isLogin = true;
  } else {
    isLogin = false;
  }
  const handleLogin = () => {
    window.location.href = "/login";
  };

  const settings = {
    className: `center ${styles.thumbail_img}`,
    centerMode: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
  };

  return (
    <div className="container">
      <div className={styles.detail}>
        <div className="row">
          <div className="col-md-2">
            <Slider {...settings}>
              <div className={styles.img_preview}>
                <img src={Laptop[0].product_img} alt={Laptop[0].product_name} />
              </div>

              <div className={styles.img_preview}>
                <img
                  src={Laptop[0].product_img1}
                  alt={Laptop[0].product_name}
                />
              </div>

              <div className={styles.img_preview}>
                <img
                  src={Laptop[0].product_img2}
                  alt={Laptop[0].product_name}
                />
              </div>

              <div className={styles.img_preview}>
                <img
                  src={Laptop[0].product_img3}
                  alt={Laptop[0].product_name}
                />
              </div>
            </Slider>
          </div>

          <div className="col-md-5">
            <div className={styles.product_img}>
              <img src={Laptop[0].product_img} alt={Laptop[0].product_name} />
            </div>
          </div>

          <div className="col-md-5">
            <div className={styles.detail_body}>
              <h2 style={{ fontWeight: 600 }}>{Laptop[0].product_name}</h2>
              <div className={styles.product_rating}>
                <FaStar className={styles.rate_icon} />
                <FaStar className={styles.rate_icon} />
                <FaStar className={styles.rate_icon} />
                <FaStar className={styles.rate_icon} />
                <FaStar />
              </div>
              <h2 style={{ color: "#ef233c", fontWeight: 600 }}>
                {Laptop[0].product_price}
              </h2>
              <h5>
                Categories: <strong>{Laptop[0].product_cate}</strong>
              </h5>
              {Laptop[0].product_des.length > 200 ? (
                <p>{Laptop[0].product_des.substring(0, 200)}[..]</p>
              ) : (
                <p>{Laptop[0].product_des}</p>
              )}
              <div className={styles.add_to_cart}>
                {isLogin ? (
                  <button className={`${styles.add_to_cart_btn}`}>
                    <FaShoppingCart /> add to cart
                  </button>
                ) : (
                  <button
                    className={`${styles.add_to_cart_btn}`}
                    onClick={handleLogin}
                  >
                    <FaShoppingCart /> add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nemo
            laudantium libero, maiores unde quibusdam incidunt iure soluta aut
            esse.
          </p>
        </div>
      </div>

      <div className="col-md-12"></div>
    </div>
  );
}
export default DetailPage;
