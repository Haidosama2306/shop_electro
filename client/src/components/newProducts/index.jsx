import "./styles.css";
import { useNavigate } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function NewProducts({ products }) {
  const navigate = useNavigate();

  let isLogin = false;

    if (localStorage.getItem("auth_token")) {
      isLogin = true;
    } else {
      isLogin = false;
    }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false
  };

  const handleLogin = () =>{
    window.location.href = "/login";
  }

  return (
    <div className='container'>
      <h2 style={{ fontWeight: 700, margin: "20px 0" }}>NEW PRODUCTS</h2>
      <Slider {...settings}>
        {products &&
          products.map((product, i) => {
            return (
              <div key={product}>
                <div className="product">
                  <div className="product_img">
                    <img src={product.src} alt={product.nameProduct} />
                    <div className="product_label">
                      <span className="new">NEW</span>
                    </div>
                  </div>

                  <div className="product_body">
                    <p className="product_category">
                      {product.category}
                    </p>
                    <h3 className="product_name">
                     <a onClick={() =>{
                      navigate(`/detail/${product.id}`)
                     }}>{product.nameProduct}</a>
                    </h3>
                    <h4 className="product_price">{product.price}</h4>
                    <div className="product_rating">
                      <FaStar className="rate_icon" />
                      <FaStar className="rate_icon" />
                      <FaStar className="rate_icon" />
                      <FaStar className="rate_icon" />
                      <FaStar className="rate_icon" />
                    </div>
                  </div>

                  <div className="add_to_cart">
                    {isLogin?(
                      <button className="add_to_cart_btn">
                      <FaShoppingCart /> add to cart
                    </button>
                    ):(
                      <button className="add_to_cart_btn" onClick={handleLogin}>
                      <FaShoppingCart /> add to cart
                    </button>
                    )}
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
