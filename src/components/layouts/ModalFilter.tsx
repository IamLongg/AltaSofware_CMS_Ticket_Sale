import React from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";

interface Props {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalFilter: React.FC<Props> = ({ closeModal }) => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  return (
    <>
      <section className="modal-filter">
        <div className="modal-filter-background">
          <div className="container">
            <div className="modal-filter-title">
              <h2 className="heading">Lọc vé</h2>
            </div>
            <div className="modal-filter-body">
              <div className="date-time">
                <div className="modal-filter-body-box">
                  <h3 className="sub-heading">Từ ngày</h3>
                  <Space direction="vertical" size={12}>
                    <DatePicker
                      defaultValue={moment("01/04/2021", dateFormatList[0])}
                      format={dateFormatList}
                    />
                  </Space>
                </div>
                <div className="modal-filter-body-box">
                  <h3 className="sub-heading">Đến ngày</h3>
                  <Space direction="vertical" size={12}>
                    <DatePicker
                      defaultValue={moment("01/04/2021", dateFormatList[0])}
                      format={dateFormatList}
                    />
                  </Space>
                </div>
              </div>
              <div className="status">
                <h3 className="sub-heading">Tình trạng sử dụng</h3>
                <div className="grid">
                  <div className="status-box">
                    <input type="radio" />
                    <p>Tất cả</p>
                  </div>
                  <div className="status-box">
                    <input type="radio" />
                    <p>Đã sử dụng</p>
                  </div>
                  <div className="status-box">
                    <input type="radio" />
                    <p>Chưa sử dụng</p>
                  </div>
                  <div className="status-box">
                    <input type="radio" />
                    <p>Hết hạn</p>
                  </div>
                </div>
              </div>
              <div className="check-in">
                <h3 className="sub-heading">Cổng check - in</h3>
                <div className="grid">
                  <div className="check-in-box">
                    <input type="checkbox" />
                    <p>Tất cả</p>
                  </div>
                  <div className="check-in-box">
                    <input type="checkbox" />
                    <p>Cổng 1</p>
                  </div>
                  <div className="check-in-box">
                    <input type="checkbox" />
                    <p>Cổng 2</p>
                  </div>
                  <div className="check-in-box">
                    <input type="checkbox" />
                    <p>Cổng 3</p>
                  </div>
                  <div className="check-in-box">
                    <input type="checkbox" />
                    <p>Cổng 4</p>
                  </div>
                  <div className="check-in-box">
                    <input type="checkbox" />
                    <p>Cổng 5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-filter-footer">
              <button className="btn-filter" onClick={() => closeModal(false)}>
                Lọc
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ModalFilter;
