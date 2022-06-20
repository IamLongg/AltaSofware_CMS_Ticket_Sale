import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Pagination } from "antd";
import ModalUpdate from "../layouts/ModalUpdate";
import ModalAdd from "../layouts/ModalAdd";
const ListTicketPackage: React.FC = () => {
  const [openModalUpdate, setOpenModalUpdate] = useState<boolean>(false);
  const [openModalAdd, setOpenModalAdd] = useState<boolean>(false);
  return (
    <>
      <section className="list-ticket-package">
        <div className="list-ticket-package-main">
          <h3 className="title">Danh sách vé</h3>
          <div className="list-ticket-package-main-func">
            <div className="list-ticket-package-main-func-search">
              <input
                type="text"
                placeholder="Tìm bảng số vé"
                className="search-input"
              />
              <span className="icon-search">
                <AiOutlineSearch />
              </span>
            </div>
            <div className="list-ticket-package-main-func-add-export">
              <div className="list-ticket-package-export btn">
                <p>Xuất file (.csv)</p>
              </div>
              <div
                className="list-ticket-package-add btn"
                onClick={() => setOpenModalAdd(true)}
              >
                <p>Thêm gói vé</p>
              </div>
              {openModalAdd && <ModalAdd closeModalAdd={setOpenModalAdd} />}
            </div>
          </div>

          <div className="list-ticket-package-main-table">
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>STT</th>
                  <th>Mã gói</th>
                  <th>Tên gói vé</th>
                  <th>Ngày áp dụng</th>
                  <th>Ngày hết hạn</th>
                  <th>Giá vé (VNĐ/Vé)</th>
                  <th>Giá Combo (VNĐ/Combo)</th>
                  <th>Tình trạng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ALT20210501</td>
                  <td>Gói gia đình</td>
                  <td>
                    <p>14/04/2021</p>
                    <p>23:00:00</p>
                  </td>
                  <td>
                    <p>14/04/2021</p>
                    <p>08:00:00</p>
                  </td>
                  <td>90.000 VNĐ</td>
                  <td>360.000 VNĐ/4 Vé</td>
                  <td>
                    <li className="li-dad">Đang áp dụng</li>
                  </td>
                  <td>
                    <span>
                      <FiEdit />
                    </span>
                    <span onClick={() => setOpenModalUpdate(true)}>
                      Cập nhật
                    </span>
                  </td>
                </tr>
                {openModalUpdate && (
                  <ModalUpdate closeModalUpdate={setOpenModalUpdate} />
                )}
                <tr>
                  <td>2</td>
                  <td>ALT20210501</td>
                  <td>Gói sự kiện</td>
                  <td>
                    <p>14/04/2021</p>
                    <p>23:00:00</p>
                  </td>
                  <td>
                    <p>14/04/2021</p>
                    <p>08:00:00</p>
                  </td>
                  <td>20.000 VNĐ</td>
                  <td>-</td>
                  <td>
                    <li className="li-tat">Tắt</li>
                  </td>
                  <td>
                    <span>
                      <FiEdit />
                    </span>
                    <span>Cập nhật</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="list-ticket-package-main-pagination">
            <Pagination defaultCurrent={1} total={200} />
          </div>
        </div>
      </section>
    </>
  );
};
export default ListTicketPackage;
