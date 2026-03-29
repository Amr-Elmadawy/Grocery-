import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Layout = () => {
  const [activePanel, setActivePanel] = useState(null);
  const HandlePanel = (tabName) => {
    setActivePanel((prev) => (prev === tabName ? null : tabName));
  };
  
  const HandleClose = ()=>{
    setActivePanel(null)
  }

  return (
    <div>
      <Navbar HandlePanel={HandlePanel} />
      <Cart activePanel={activePanel}  HandleClose={HandleClose}/>
      <Wishlist activePanel={activePanel} HandleClose={HandleClose} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
