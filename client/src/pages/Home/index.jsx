import React from "react";
import Collections from "../../components/Collections";
import NewProducts from "../../components/newProducts";
import HotDeal from "../../components/HotDeal";
import FeatureProduct from "../../components/FeatureProduct";
import Feature_Laptop from "../../components/fea_Laptop";
import Feature_SmartWatch from "../../components/fea_SmartWatch";
import Feature_Smartphone from "../../components/fea_SmartPhone";
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
            <Feature_Laptop products={Laptop}/>
          </div>

          <div className="col-md-4">
          <h3>smartphone</h3>
            <Feature_Smartphone products={Laptop}/>
          </div>
          <div className="col-md-4">
          <h3>smartwatch</h3>
            <Feature_SmartWatch products={Laptop}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
