import styles from "./styles.module.css";

function Navigation({ navigations }) {
  return (
    <div className={`card text-center ${styles.Navigation}`}>
      <div className="container">
        <ul className={`main-nav nav + ${styles.Navigattion_ul}`}>
          {navigations &&
            navigations.map((navigation, i) => {
              return (
                <li key={navigation} className="">
                  <a className={`${styles.cate_item}`} href="#">
                    {navigation.categories_name}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
export default Navigation;
