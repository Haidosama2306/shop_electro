import styles from "./styles.module.css";
import React from "react";
import Collections from "../../components/Collections";
import NewProducts from "../../components/newProducts";
import HotDeal from "../../components/HotDeal";
import FeatureProduct from "../../components/FeatureProduct";
import { product } from "../../commom/data/newProduct";
import { Laptop } from "../../commom/data/lapTop";
function HomePage() {
  return (
    <div>
      <div className="collections">
        <Collections />
      </div>

      <div className="newProduct">
        <NewProducts products={product} />
      </div>

      <div className="hotdeal">
        <HotDeal />
      </div>

      <div className="featureProduct">
        <FeatureProduct products={Laptop} />
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4">
            <h3>Laptop</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              nulla, modi ducimus perspiciatis deserunt facilis dolores
              laudantium minima iure quam ad recusandae. Quod inventore quaerat
              consequatur voluptas consequuntur non id atque ipsum a omnis natus
              quia, harum, commodi eaque sed ipsam veniam dicta quisquam ea
              esse. Odio tenetur nostrum quo!
            </p>
          </div>
          <div className="col-md-4">
          <h3>smartphone</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              nulla, modi ducimus perspiciatis deserunt facilis dolores
              laudantium minima iure quam ad recusandae. Quod inventore quaerat
              consequatur voluptas consequuntur non id atque ipsum a omnis natus
              quia, harum, commodi eaque sed ipsam veniam dicta quisquam ea
              esse. Odio tenetur nostrum quo!
            </p>
          </div>
          <div className="col-md-4">
          <h3>smartwatch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              nulla, modi ducimus perspiciatis deserunt facilis dolores
              laudantium minima iure quam ad recusandae. Quod inventore quaerat
              consequatur voluptas consequuntur non id atque ipsum a omnis natus
              quia, harum, commodi eaque sed ipsam veniam dicta quisquam ea
              esse. Odio tenetur nostrum quo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
