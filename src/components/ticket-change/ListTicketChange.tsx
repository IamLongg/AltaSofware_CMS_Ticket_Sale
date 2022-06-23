import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Pagination } from "antd";
import data from "../data/dataTicket";

const ListTicketChange: React.FC = () => {
  const [items, setItems] = useState(data);
  return (
    <>
      <section className="list-ticket-change">
        <div className="list-ticket-change-main">
          <h3 className="title">Đổi soát vé</h3>
          <div className="list-ticket-change-main-func">
            <div className="list-ticket-change-main-func-search">
              <input
                type="text"
                placeholder="Tìm bảng số vé"
                className="search-input"
              />
              <span className="icon-search">
                <AiOutlineSearch />
              </span>
            </div>
            <div className="list-ticket-change-main-func-filter-export">
              <div className="list-ticket-change-filter btn save">
                <p>Chốt đổi soát</p>
              </div>
            </div>
          </div>
          <div className="list-ticket-change-main-table">
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>STT</th>
                  <th>Số vé</th>
                  <th>Tên sự kiện</th>
                  <th>Ngày sử dụngg</th>
                  <th>Loại vé</th>
                  <th>Cổng check - in</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map((item) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.sove}</td>
                        <td>{item.tensukien}</td>
                        <td>{item.ngaysudung}</td>
                        <td>{item.loaive}</td>
                        <td>{item.congcheckin}</td>
                        <td>
                          <span>{item.action}</span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="list-ticket-change-main-pagination">
            <Pagination defaultCurrent={1} total={200} />
          </div>
        </div>
      </section>
    </>
  );
};
export default ListTicketChange;
