import styles from "./styles.module.css";
import {
  FaArrowAltCircleRight,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

function HomePage() {
  return (
    <div className="container">
      {/* Collections */}
      <div className="row">
        <div className="col-md-4 col-xs-6">
          <div className={styles.collection}>
            <div className={styles.collection_img}>
              <img
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/15-3520/pdp/laptop-latitude-15-3520-pdp-mod-1.jpg?fmt=jpg&wid=965&hei=391"
                alt=""
              />
            </div>
            <div className={styles.collection_body}>
              <h3>
                Laptop <br />
                Collection
              </h3>
              <a className={styles.collection_btn} href="#">
                Shop Now <FaArrowAltCircleRight />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xs-6">
          <div className={styles.collection}>
            <div className={styles.collection_img}>
              <img
                src="https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png"
                alt=""
              />
            </div>
            <div className={styles.collection_body}>
              <h3>
                SmartPhone <br />
                Collection
              </h3>
              <a className={styles.collection_btn} href="#">
                Shop Now <FaArrowAltCircleRight />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xs-6">
          <div className={styles.collection}>
            <div className={styles.collection_img}>
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2023/10/smartwatches-2048px-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
                alt=""
              />
            </div>
            <div className={styles.collection_body}>
              <h3>
                SmartWatch <br />
                Collection
              </h3>
              <a className={styles.collection_btn} href="#">
                Shop Now <FaArrowAltCircleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /Collections */}

      {/* New Products */}
      <div className={styles.products_tabs}>
      <h2 style={{ fontWeight: 700, margin: "20px 0" }}>NEW PRODUCTS</h2>
        <div id="tab1" className={`${styles.tab_pane} + ${styles.active}`}>
          <div className={`${styles.products_slick}`} data-nav="#slick-nav-1">
            
            {/* List Products */}

            {/* Product */}
            <div className={styles.product}>
              <div className={`${styles.product_img}`}>
                <img
                  src="https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_32017/iphone-14-pro-m_main_979.png"
                  alt=""
                />
                <div className={`${styles.product_label}`}>
                  <span className={`${styles.new}`}>NEW</span>
                </div>
              </div>

              <div className={styles.product_body}>
                <p className={styles.product_category}>Iphone</p>
                <h3 className={styles.product_name}>Iphone 14 Pro 125Gb</h3>
                <h4 className={styles.product_price}>$1500</h4>
                <div className={styles.product_rating}>
                  <FaStar className={styles.rate_icon}/>
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
            {/* /Product */}

            {/* Product */}
            <div className={styles.product}>
              <div className={`${styles.product_img}`}>
                <img
                  src="https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_32017/iphone-14-pro-m_main_979.png"
                  alt=""
                />
                <div className={`${styles.product_label}`}>
                  <span className={`${styles.new}`}>NEW</span>
                </div>
              </div>

              <div className={styles.product_body}>
                <p className={styles.product_category}>Iphone</p>
                <h3 className={styles.product_name}>Iphone 14 Pro 125Gb</h3>
                <h4 className={styles.product_price}>$1500</h4>
                <div className={styles.product_rating}>
                  <FaStar className={styles.rate_icon}/>
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
            {/* /Product */}

            {/* Product */}
            <div className={styles.product}>
              <div className={`${styles.product_img}`}>
                <img
                  src="https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_32017/iphone-14-pro-m_main_979.png"
                  alt=""
                />
                <div className={`${styles.product_label}`}>
                  <span className={`${styles.new}`}>NEW</span>
                </div>
              </div>

              <div className={styles.product_body}>
                <p className={styles.product_category}>Iphone</p>
                <h3 className={styles.product_name}>Iphone 14 Pro 125Gb</h3>
                <h4 className={styles.product_price}>$1500</h4>
                <div className={styles.product_rating}>
                  <FaStar className={styles.rate_icon}/>
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
            {/* /Product */}

            {/* Product */}
            <div className={styles.product}>
              <div className={`${styles.product_img}`}>
                <img
                  src="https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_32017/iphone-14-pro-m_main_979.png"
                  alt=""
                />
                <div className={`${styles.product_label}`}>
                  <span className={`${styles.new}`}>NEW</span>
                </div>
              </div>

              <div className={styles.product_body}>
                <p className={styles.product_category}>Iphone</p>
                <h3 className={styles.product_name}>Iphone 14 Pro 125Gb</h3>
                <h4 className={styles.product_price}>$1500</h4>
                <div className={styles.product_rating}>
                  <FaStar className={styles.rate_icon}/>
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
            {/* /Product */}

            <div id="slick-nav-1" className={styles.products_slick_nav}></div>
          </div>
        </div>
      </div>
      {/* /New Products */}
    </div>
  );
}
export default HomePage;
