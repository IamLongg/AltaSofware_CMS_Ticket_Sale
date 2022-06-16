import React from "react";
import Menubar from "../layouts/MenuBar";
import Header from "../layouts/Header";
import Chart from "./Chart";
const Home = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <Header />
          <Chart />
        </main>
      </div>
    </>
  );
};
export default Home;
