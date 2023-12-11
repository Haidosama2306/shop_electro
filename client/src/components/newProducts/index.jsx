import styles from "./styles.module.css";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function NewProducts({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className='container'>
      <h2 style={{ fontWeight: 700, margin: "20px 0" }}>NEW PRODUCTS</h2>
      <Slider {...settings}>
        {products &&
          products.map((product, i) => {
            return (
              <div key={product}>
                <div className={styles.product}>
                  <div className={`${styles.product_img}`}>
                    <img src={product.src} alt={product.nameProduct} />
                    <div className={`${styles.product_label}`}>
                      <span className={`${styles.new}`}>NEW</span>
                    </div>
                  </div>

                  <div className={styles.product_body}>
                    <p className={styles.product_category}>
                      {product.category}
                    </p>
                    <h3 className={styles.product_name}>
                      {product.nameProduct}
                    </h3>
                    <h4 className={styles.product_price}>{product.price}</h4>
                    <div className={styles.product_rating}>
                      <FaStar className={styles.rate_icon} />
                      <FaStar className={styles.rate_icon} />
                      <FaStar className={styles.rate_icon} />
                      <FaStar className={styles.rate_icon} />
                      <FaStar className={styles.rate_icon} />
                    </div>
                  </div>

                  <div className={styles.add_to_cart}>
                    <button className={`${styles.add_to_cart_btn}`}>
                      <FaShoppingCart /> add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}
export default NewProducts;
