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
    <>
      <Promo />
      <main className={`main ${isOpen && "main_opened"}`}>
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer isOpen={true} />
    </>
  );
}
export default Main;
