import React from "react";
import Menubar from "../layouts/MenuBar";
import Header from "../layouts/Header";
import ListTicketChange from "./ListTicketChange";
import TicketFilter from "./TicketFilter";
const TicketChange = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <Header />
          <div className="main-wrap-small">
            <div className="main-wrap-small-box">
              <ListTicketChange />
            </div>
            <div className="main-wrap-small-box">
              <TicketFilter />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default TicketChange;
