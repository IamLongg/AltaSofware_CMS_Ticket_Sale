import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter, FiMoreVertical } from "react-icons/fi";
import { Pagination } from "antd";
import ModalFilter from "../layouts/ModalFilter";
import ModalChangeTicket from "../layouts/ModalChangeTicket";
const ListTicket: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalChangeTicket, setOpenModalChangeTicket] =
    useState<boolean>(false);
  return (
    <>
      <section className="list-ticket">
        <div className="list-ticket-main">
          <h3 className="title">Danh sách vé</h3>
          <div className="list-ticket-main-func">
            <div className="list-ticket-main-func-search">
              <input
                type="text"
                placeholder="Tìm bảng số vé"
                className="search-input"
              />
              <span className="icon-search">
                <AiOutlineSearch />
              </span>
            </div>
            <div className="list-ticket-main-func-filter-export">
              <div
                className="list-ticket-filter btn"
                onClick={() => setOpenModal(true)}
              >
                <span>
                  <FiFilter />
                </span>
                <p>Lọc vé</p>
              </div>
              <div className="list-ticket-export btn">
                <p>Xuất file (.csv)</p>
              </div>
            </div>
          </div>
          {openModal && <ModalFilter closeModal={setOpenModal} />}
          <div className="list-ticket-main-table">
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>STT</th>
                  <th>Booking code</th>
                  <th>Số vé</th>
                  <th>Tình trạng sử dụng</th>
                  <th>Ngày sử dụng</th>
                  <th>Ngày xuất vé</th>
                  <th>Cổng check-in</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ALTFGHJU</td>
                  <td>123456789034</td>
                  <td>
                    <li className="li-dsd">Đã sử dụng</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>Cổng 1</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>ALTOJMNB</td>
                  <td>236784631642</td>
                  <td>
                    <li className="li-csd">Chưa sử dụng</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>
                    <span>-</span>
                    <span className="btn-more">
                      <FiMoreVertical />
                      <div className="list-ticket-more">
                        <p>Sử dụng vé</p>
                        <p onClick={() => setOpenModalChangeTicket(true)}>
                          Đổi ngày sử dụng
                        </p>
                      </div>
                    </span>
                    {openModalChangeTicket && (
                      <ModalChangeTicket
                        closeModalChangeTicket={setOpenModalChangeTicket}
                      />
                    )}
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>ALTQTYJH</td>
                  <td>487621489474</td>
                  <td>
                    <li className="li-hh">Hết hạn</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>
                    <span>-</span>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>ALTCFSDF</td>
                  <td>156464891479</td>
                  <td>
                    <li className="li-hh">Hết hạn</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>
                    <span>-</span>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>ALTIOJNB</td>
                  <td>201649631896</td>
                  <td>
                    <li className="li-dsd">Đã sử dụng</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>Cổng 1</td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>ALTVDFTR</td>
                  <td>148920121478</td>
                  <td>
                    <li className="li-dsd">Đã sử dụng</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>Cổng 1</td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>ALTLIOVF</td>
                  <td>654115684899</td>
                  <td>
                    <li className="li-dsd">Đã sử dụng</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>Cổng 1</td>
                </tr>

                <tr>
                  <td>8</td>
                  <td>ALTMLNHG</td>
                  <td>894648474910</td>
                  <td>
                    <li className="li-dsd">Đã sử dụng</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>Cổng 1</td>
                </tr>

                <tr>
                  <td>9</td>
                  <td>ALTETRUH</td>
                  <td>894875101400</td>
                  <td>
                    <li className="li-dsd">Đã sử dụng</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>Cổng 1</td>
                </tr>

                <tr>
                  <td>10</td>
                  <td>ALTCSDGF</td>
                  <td>205314876321</td>
                  <td>
                    <li className="li-dsd">Đã sử dụng</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>Cổng 1</td>
                </tr>

                <tr>
                  <td>11</td>
                  <td>ALTNBVGH</td>
                  <td>185653100147</td>
                  <td>
                    <li className="li-dsd">Đã sử dụng</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>Cổng 1</td>
                </tr>

                <tr>
                  <td>12</td>
                  <td>ALTFGHJU</td>
                  <td>123456789034</td>
                  <td>
                    <li className="li-dsd">Đã sử dụng</li>
                  </td>
                  <td>14/04/2021</td>
                  <td>14/04/2021</td>
                  <td>Cổng 1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="list-ticket-main-pagination">
            <Pagination defaultCurrent={1} total={200} />
          </div>
        </div>
      </section>
    </>
  );
};
export default ListTicket;
