import React from "react";
import Menubar from "../layouts/MenuBar";
import Header from "../layouts/Header";
import ListTicketPackage from "./ListTicketPackage";
const Setting = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <Header />
          <ListTicketPackage />
        </main>
      </div>
    </>
  );
};
export default Setting;
