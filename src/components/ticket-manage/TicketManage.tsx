import React from "react";
import Menubar from "../layouts/MenuBar";
import Header from "../layouts/Header";
const TicketManage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <Header />
        </main>
      </div>
    </>
  );
};
export default TicketManage;
