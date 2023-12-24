import "./styles.css";

function Navigation({ navigations }) {
  return (
    <div className="card text-center Navigation">
      <div className="container">
        <ul className="main-nav nav Navigattion_ul">
          {navigations &&
            navigations.map((navigation, i) => {
              return (
                <li key={navigation} className="">
                  <a className="cate_item" href="#">
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
