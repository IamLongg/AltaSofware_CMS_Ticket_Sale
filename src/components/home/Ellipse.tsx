import React from "react";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import DatePicker from "sassy-datepicker";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Ellipse = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data1 = {
    labels: [],
    datasets: [
      {
        data: [30000, 56024],
        backgroundColor: ["#FF8A48", "#4F75FF"],
      },
    ],
  };
  const data2 = {
    labels: [],
    datasets: [
      {
        data: [30256, 28302],
        backgroundColor: ["#FF8A48", "#4F75FF"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const [date, setDate] = React.useState(new Date());
  const handleDateSelected = (newDate: any) => {
    setDate(newDate);
  };

  //   const ShowCalendar = () => {
  //     const calen: any = document.getElementById("calen");
  //     if (calen.style.display === "none") {
  //       calen.style.display = "flex";
  //       const checktngay: any = document.getElementById("checkngay");
  //       checktngay.checked = true;
  //     } else {
  //       calen.style.display = "none";
  //     }
  //   };
  return (
    <>
      <section className="ellipse">
        <div className="ellipse-chart">
          <div className="ellipse-chart-box">
            <div className="date">
              <span>
                Tháng {date.getMonth() + 1}, {date.getFullYear()}
              </span>
              <span>
                <FiCalendar />
              </span>
            </div>
            {/* <div className="date-select" id="calen">
              <div className="date-moment">
                <span>
                  <AiOutlineLeft />
                </span>
                <h4>{date.toLocaleDateString()}</h4>
                <span>
                  <AiOutlineRight />
                </span>
              </div>
              <DatePicker selected={date} onChange={handleDateSelected} />
            </div> */}
          </div>
          <div className="ellipse-chart-box">
            <div className="content">
              <p> Gói gia đình</p>
              <div className="ellipse-chart-box-line">
                <Doughnut data={data1} options={options} />
              </div>
            </div>
          </div>
          <div className="ellipse-chart-box">
            <div className="content">
              <p> Gói sự kiện</p>
              <div className="ellipse-chart-box-line">
                <Doughnut data={data2} options={options} />
              </div>
            </div>
          </div>
          <div className="ellipse-chart-box">
            <div className="row">
              <div className="note"></div>
              <span>Vé đã sử dụng</span>
            </div>
            <div className="row">
              <div className="note yellow"></div>
              <span>Vé chưa sử dụng</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Ellipse;
