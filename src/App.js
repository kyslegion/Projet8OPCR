  /* eslint-disable */
import React from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Timeline_2 from "./components/Timeline_2";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Timeline_2 />
      <Work />
      <Timeline />
      <Services />
    </>
  );
}

export default App;