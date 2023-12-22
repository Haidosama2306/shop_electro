import styles from "./styles.module.css";

function Feature_Smartphone({ products }) {
  return (
    <div className={styles.Feature_Laptop}>
        {products &&
          products.map((product, i) => {
            return (
              <div key={product.id} className={styles.card_content}>

                <div className="row">
                  <div className="col-3">
                    <div className={styles.product_img}>
                      <img
                        src={product.product_img}
                        alt={product.product_name}
                      />
                    </div>
                  </div>
                  <div className="col-9">
                    <div className={styles.card_body}>
                      <p className={styles.product_cate}>
                        {product.product_cate}
                      </p>
                      <button
                        className={styles.product_name}
                      >{`${product.product_name.slice(0, 20)} [...]`}</button>
                      <p className={styles.product_price}>
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
export default Feature_Smartphone;
