import React from "react";
import Aboutme from "../aboutme/Aboutme";
import Contact from "../contact/Contact";
import Header from "../Header/Header";
import Projects from "../Mypojects/Projects";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Aboutme></Aboutme>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
