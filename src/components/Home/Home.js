import React from "react";
import Aboutme from "../aboutme/Aboutme";
import Contact from "../contact/Contact";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Aboutme></Aboutme>
      <Contact></Contact>
    </div>
  );
};

export default Home;
