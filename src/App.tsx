import React from "react";
import logo from "./logo.svg";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TicketManage from "./components/ticket-manage/TicketManage";
import TicketChange from "./components/ticket-change/TicketChange";
function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-ticket" element={<TicketManage />} />
          <Route path="/change-ticket" element={<TicketChange />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
