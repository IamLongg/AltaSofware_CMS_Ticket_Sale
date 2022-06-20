import React from "react";
import { DatePicker, Space, TimePicker } from "antd";
import moment from "moment";
import { AiOutlineDown } from "react-icons/ai";
interface Props {
  closeModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalUpdate: React.FC<Props> = ({ closeModalUpdate }) => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const format = "HH:mm:ss";
  return (
    <section className="modal-update">
      <div className="modal-update-background">
        <div className="container">
          <div className="modal-update-title">
            <h2 className="heading">Cập nhật thông tin gói vé</h2>
          </div>
          <div className="modal-update-body">
            <div className="infomation">
              <div className="box">
                <h3 className="sub-heading">
                  Mã sự kiện <span>*</span>
                </h3>
                <input
                  type="text"
                  placeholder="PKG20210502"
                  className="input-info"
                />
              </div>
              <div className="box medium">
                <h3 className="sub-heading">Tên sự kiện</h3>
                <input
                  type="text"
                  placeholder="Hội chợ triển lãm hàng tiêu dùng 2021"
                  className="input-info medium"
                />
              </div>
            </div>
            <div className="date-time">
              <div className="modal-update-body-box">
                <h3 className="sub-heading">Ngày áo dụng</h3>
                <Space direction="horizontal" size={12}>
                  <DatePicker
                    defaultValue={moment("01/04/2021", dateFormatList[0])}
                    format={dateFormatList}
                  />
                  <TimePicker
                    defaultValue={moment("08:00:00", format)}
                    format={format}
                  />
                </Space>
              </div>
              <div className="modal-update-body-box">
                <h3 className="sub-heading">Ngày hết hạn</h3>
                <Space direction="horizontal" size={12}>
                  <DatePicker
                    defaultValue={moment("01/04/2021", dateFormatList[0])}
                    format={dateFormatList}
                  />
                  <TimePicker
                    defaultValue={moment("08:00:00", format)}
                    format={format}
                  />
                </Space>
              </div>
            </div>
            <div className="price-apply">
              <h3 className="sub-heading">Tình trạng sử dụng</h3>
              <div className="price-apply-box">
                <input type="checkbox" className="input-checkbox" />
                <p>Vé lẻ (vnđ/vé) với giá</p>
                <input
                  type="text"
                  className="input-price"
                  placeholder="Giá vé"
                />
                <p>/vé</p>
              </div>
              <div className="price-apply-box">
                <input type="checkbox" className="input-checkbox" />
                <p>Combo vé với giá</p>
                <input
                  type="text"
                  className="input-price"
                  placeholder="Giá vé"
                />
                <p>/</p>
                <input
                  type="text"
                  className="input-price2"
                  placeholder="Giá vé"
                />
                <p>vé</p>
              </div>
            </div>
            <div className="status">
              <h3 className="sub-heading">Tình trạng</h3>
              <div className="dropdown">
                <div className="dropdown-select">
                  <span className="select">Đang áp dụng</span>
                  <span className="select icon-dropdown">
                    <AiOutlineDown />
                  </span>
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">Tất cả</div>
                  <div className="dropdown-list__item">Đã áp dụng</div>
                </div>
              </div>
            </div>
            <div className="note">
              <h5 className="sub-note">
                <span>*</span>là thông tin bắt buộc
              </h5>
            </div>
          </div>
          <div className="modal-update-footer">
            <button
              className="btn-update"
              onClick={() => closeModalUpdate(false)}
            >
              Hủy
            </button>
            <button className="btn-update save">Lưu</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ModalUpdate;
