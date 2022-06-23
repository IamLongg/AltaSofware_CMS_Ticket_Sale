import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { DatePicker, Button, Space } from "antd";
import moment from "moment";
import data from "../data/dataTicket";
const TicketFilter = () => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const onChangeApplyDate = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  const [items, setItems] = useState(data);

  const handleFilter = (actionItem: string) => {
    const updateItems = data.filter((curElem) => {
      return curElem.action === actionItem;
    });
    setItems(updateItems);
  };

  return (
    <>
      <section className="ticket-filter">
        <div className="ticket-filter-main">
          <h3 className="title">Lọc vé</h3>
          <div className="dropdown">
            <div className="dropdown-select">
              <span className="select">Hội chợ triển lãm tiêu dùng 2021</span>
              <span className="select icon-dropdown">
                <AiOutlineDown />
              </span>
            </div>
            <div className="dropdown-list">
              <div className="dropdown-list__item">Tất cả</div>
              <div className="dropdown-list__item">Đã áp dụng</div>
            </div>
          </div>
          <div className="status">
            <div className="status-box">
              <p className="sub-heading">Tình trạng đổi vé</p>
            </div>
            <div className="status-box">
              <div className="status-box-check">
                <input
                  type="radio"
                  name=""
                  id=""
                  className="input-radio"
                  onClick={() => setItems(data)}
                />
                <span>Tất cả</span>
              </div>
              <div className="status-box-check">
                <input
                  type="radio"
                  name=""
                  id=""
                  className="input-radio"
                  onClick={() => handleFilter("Đã đổi soát")}
                />
                <span>Đã đổi soát</span>
              </div>
              <div className="status-box-check">
                <input
                  type="radio"
                  name=""
                  id=""
                  className="input-radio"
                  onClick={() => handleFilter("Chưa đổi soát")}
                />
                <span>Chưa đổi soát</span>
              </div>
            </div>
          </div>
          <div className="type">
            <div className="type-box">
              <p className="sub-heading">Loại vé</p>
            </div>
            <div className="type-box">
              <p>Vé cổng</p>
            </div>
          </div>
          <div className="date-time">
            <div className="date-time-box">
              <p className="sub-heading">Từ ngày</p>
            </div>
            <div className="date-time-box">
              <Space direction="vertical" size={12}>
                <DatePicker
                  defaultValue={moment("01/05/2021", dateFormatList[0])}
                  format={dateFormatList}
                  className="bg-tn"
                />
              </Space>
            </div>
          </div>
          <div className="date-time">
            <div className="date-time-box">
              <p className="sub-heading">Đến ngày</p>
            </div>
            <div className="date-time-box">
              <Space direction="vertical" size={12}>
                <DatePicker onChange={onChangeApplyDate} className="bg-dn" />
              </Space>
            </div>
          </div>
          <div className="ticket-filter-main-func">
            <button className="btn">Lọc</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default TicketFilter;
