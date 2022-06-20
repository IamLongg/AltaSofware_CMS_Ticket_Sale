import React from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";

interface Props {
  closeModalChangeTicket: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalChangeTicket: React.FC<Props> = ({ closeModalChangeTicket }) => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  return (
    <>
      <section className="modal-change-ticket">
        <div className="modal-change-ticket-background">
          <div className="container">
            <div className="modal-change-ticket-title">
              <h2 className="heading">Đổi ngày sử dụng vé</h2>
            </div>
            <div className="modal-change-ticket-body">
              <div className="modal-change-ticket-body-box">
                <h3>Số vé</h3>
                <p>pKG20210502</p>
              </div>
              <div className="modal-change-ticket-body-box">
                <h3>Số vé</h3>
                <p>Vé cổng - Gói sự kiện</p>
              </div>
              <div className="modal-change-ticket-body-box">
                <h3>Tên sự kiện</h3>
                <p>Hội trợ triển lãm hàng tiêu dùng 2021</p>
              </div>
              <div className="modal-change-ticket-body-box">
                <h3>Hạn sử dụng</h3>
                <p>
                  <Space direction="vertical" size={12}>
                    <DatePicker
                      defaultValue={moment("01/04/2021", dateFormatList[0])}
                      format={dateFormatList}
                    />
                  </Space>
                </p>
              </div>
            </div>
            <div className="modal-change-ticket-footer">
              <button
                className="btn-change-ticket"
                onClick={() => closeModalChangeTicket(false)}
              >
                Hủy
              </button>
              <button className="btn-change-ticket save">Lưu</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ModalChangeTicket;
