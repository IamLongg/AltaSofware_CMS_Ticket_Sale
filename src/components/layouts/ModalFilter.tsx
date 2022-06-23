import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";

interface Props {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalFilter: React.FC<Props> = ({ closeModal }) => {
  const [checked, setChecked] = useState<Number>();

  const inputStatus = [
    {
      id: 1,
      name: "Tất cả",
    },
    {
      id: 2,
      name: "Đã sử dụng",
    },
    {
      id: 3,
      name: "Chưa sử dụng",
    },
    {
      id: 4,
      name: "Hết hạn",
    },
  ];

  function hanleCheck() {
    const checkall: any = document.getElementById("checkall");
    const checkc1: any = document.getElementById("checkdc1");
    const checkc2: any = document.getElementById("checkdc2");
    const checkc3: any = document.getElementById("checkdc3");
    const checkc4: any = document.getElementById("checkdc4");
    const checkc5: any = document.getElementById("checkdc5");
    if (checkall.checked === true) {
      checkc1.checked = false;
      checkc1.disabled = true;

      checkc2.checked = false;
      checkc2.disabled = true;

      checkc3.checked = false;
      checkc3.disabled = true;

      checkc4.checked = false;
      checkc4.disabled = true;

      checkc5.checked = false;
      checkc5.disabled = true;
    } else {
      checkc1.disabled = false;
      checkc2.disabled = false;
      checkc3.disabled = false;
      checkc4.disabled = false;
      checkc5.disabled = false;
    }
  }

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
                  {inputStatus &&
                    inputStatus.map((item) => (
                      <div className="status-box">
                        <input
                          type="radio"
                          checked={checked === item.id}
                          onChange={() => setChecked(item.id)}
                        />
                        <p>{item.name}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="check-in">
                <h3 className="sub-heading">Cổng check - in</h3>
                <div className="grid">
                  <div className="check-in-box">
                    <input
                      type="checkbox"
                      id="checkall"
                      onChange={() => hanleCheck()}
                    />
                    <p>Tất cả</p>
                  </div>
                  <div className="check-in-box">
                    <input type="checkbox" id="checkdc1" />
                    <p>Cổng 1</p>
                  </div>
                  <div className="check-in-box">
                    <input type="checkbox" id="checkdc2" />
                    <p>Cổng 2</p>
                  </div>
                  <div className="check-in-box">
                    <input type="checkbox" id="checkdc3" />
                    <p>Cổng 3</p>
                  </div>
                  <div className="check-in-box">
                    <input type="checkbox" id="checkdc4" />
                    <p>Cổng 4</p>
                  </div>
                  <div className="check-in-box">
                    <input type="checkbox" id="checkdc5" />
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
