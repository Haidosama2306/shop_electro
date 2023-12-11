import styles from "./styles.module.css";
import React from "react";
import Collections from "../../components/Collections";
import NewProducts from "../../components/newProducts";
import HotDeal from "../../components/HotDeal";
import FeatureProduct from "../../components/FeatureProduct";
import { product } from "../../commom/data/newProduct";
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
        <FeatureProduct products={product} />
      </div>
      
    </div>
  );
}
export default HomePage;
