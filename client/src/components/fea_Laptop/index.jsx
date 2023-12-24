import "./styles.css";

function Feature_Laptop({ products }) {
  return (
    <div className="Feature_Laptop">
        {products &&
          products.map((product, i) => {
            return (
              <div key={product.id} className="card_content">

                <div className="row">
                  <div className="col-3">
                    <div className="product_img">
                      <img
                        src={product.product_img}
                        alt={product.product_name}
                      />
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="card_body">
                      <p className="product_cate">
                        {product.product_cate}
                      </p>
                      <button
                        className="product_name"
                      >{`${product.product_name.slice(0, 20)} [...]`}</button>
                      <p className="product_price">
                        {product.product_price}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
    </div>
  );
}
export default Feature_Laptop;
