import React from "react";

import "./Main.css";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main({ isOpen }) {
  return (
    <main className={`main ${isOpen && "main_opened"}`}>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer isOpen={true} />
    </main>
  );
}
export default Main;
