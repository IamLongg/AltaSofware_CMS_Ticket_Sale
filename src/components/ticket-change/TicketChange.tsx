import React from "react";
import Menubar from "../layouts/MenuBar";
import Header from "../layouts/Header";
const TicketChange = () => {
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
export default TicketChange;
