import React, {  } from "react";
import { Outlet } from "react-router-dom";
import Content from "../content";
import Header from "../header";
import Footer from "../footer";

function Home() {
 
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Content>
          <Outlet />
        </Content>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
