import React, { useState } from "react";
import { DatePicker, Space, Button, TimePicker } from "antd";
import { AiOutlineDown } from "react-icons/ai";

interface Props {
  closeModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalAdd: React.FC<Props> = ({ closeModalAdd }) => {
  const [openApplyDate, setOpenApplyDate] = useState(false);
  const [openExpires, setOpenExpires] = useState(false);

  const onChangeApplyDate = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  const onChangeExpiresDate = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  return (
    <section className="modal-add">
      <div className="modal-add-background">
        <div className="container">
          <div className="modal-add-title">
            <h2 className="heading">Thêm gói vé</h2>
          </div>
          <div className="modal-add-body">
            <div className="infomation">
              <div className="box">
                <h3 className="sub-heading">
                  Tên gói vé <span>*</span>
                </h3>
                <input
                  type="text"
                  className="input-info"
                  placeholder="Nhập tên gói vé"
                />
              </div>
            </div>
            <div className="date-time">
              <div className="modal-add-body-box">
                <h3 className="sub-heading">Ngày áo dụng</h3>
                <Space direction="horizontal" size={12}>
                  <DatePicker onChange={onChangeApplyDate} />
                  <TimePicker
                    open={openApplyDate}
                    onOpenChange={setOpenApplyDate}
                    renderExtraFooter={() => (
                      <Button
                        size="small"
                        type="primary"
                        onClick={() => setOpenApplyDate(false)}
                      >
                        OK
                      </Button>
                    )}
                  />
                </Space>
              </div>
              <div className="modal-add-body-box">
                <h3 className="sub-heading">Ngày hết hạn</h3>
                <Space direction="horizontal" size={12}>
                  <DatePicker onChange={onChangeExpiresDate} />
                  <TimePicker
                    open={openExpires}
                    onOpenChange={setOpenExpires}
                    renderExtraFooter={() => (
                      <Button
                        size="small"
                        type="primary"
                        onClick={() => setOpenExpires(false)}
                      >
                        OK
                      </Button>
                    )}
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
          <div className="modal-add-footer">
            <button className="btn-add" onClick={() => closeModalAdd(false)}>
              Hủy
            </button>
            <button className="btn-add save">Lưu</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ModalAdd;
