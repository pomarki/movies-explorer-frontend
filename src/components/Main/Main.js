import React from "react";

import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";

function Main(props) {
  return (
    <main className="main">
      <NavTab />
      <AboutProject />
      <Techs />
    </main>
  );
}
export default Main;
