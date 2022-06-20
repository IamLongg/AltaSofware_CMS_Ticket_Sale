import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Pagination } from "antd";
const ListTicketChange: React.FC = () => {
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
              <div className="list-ticket-change-filter btn">
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
                <tr>
                  <td>1</td>
                  <td>205314876321</td>
                  <td>Hội chợ triển lãm tiêu dùng 2021</td>
                  <td>14/04/2021</td>
                  <td>Vé cổng</td>
                  <td>Cổng 1</td>
                  <td>
                    <span>Chưa đối soát</span>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>205314801225</td>
                  <td>Hội chợ triển lãm tiêu dùng 2021</td>
                  <td>14/04/2021</td>
                  <td>Vé cổng</td>
                  <td>Cổng 1</td>
                  <td>
                    <span>Chưa đối soát</span>
                  </td>
                </tr>
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
