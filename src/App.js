import React from "react";
import ContainerLayout from "./components/ContainerLayout";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./styles.css";
function App() {
  return (
    <ContainerLayout>
      <NavBar />
      <Content />
      <Footer />
    </ContainerLayout>
  );
}

export default App;
