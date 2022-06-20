import React from "react";
import Menubar from "../layouts/MenuBar";
import Header from "../layouts/Header";
import ListTicket from "./ListTicket";
const TicketManage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <Header />
          <ListTicket />
        </main>
      </div>
    </>
  );
};
export default TicketManage;
