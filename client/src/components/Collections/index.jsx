import "./styles.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Collections() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xs-6">
          <div className="collection">
            <div className="collection_img">
              <img
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/15-3520/pdp/laptop-latitude-15-3520-pdp-mod-1.jpg?fmt=jpg&wid=965&hei=391"
                alt=""
              />
            </div>
            <div className="collection_body">
              <h3>
                Laptop <br />
                Collection
              </h3>
              <a className="collection_btn" href="#">
                Shop Now <FaArrowAltCircleRight />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xs-6">
          <div className="collection">
            <div className="collection_img">
              <img
                src="https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png"
                alt=""
              />
            </div>
            <div className="collection_body">
              <h3>
                SmartPhone <br />
                Collection
              </h3>
              <a className="collection_btn" href="#">
                Shop Now <FaArrowAltCircleRight />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xs-6">
          <div className="collection">
            <div className="collection_img">
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2023/10/smartwatches-2048px-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
                alt=""
              />
            </div>
            <div className="collection_body">
              <h3>
                SmartWatch <br />
                Collection
              </h3>
              <a className="collection_btn" href="#">
                Shop Now <FaArrowAltCircleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Collections;
