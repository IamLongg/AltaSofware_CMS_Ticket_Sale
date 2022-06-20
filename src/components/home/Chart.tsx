import React from "react";
import DatePicker from "sassy-datepicker";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FiCalendar } from "react-icons/fi";
import Ellipse from "./Ellipse";

const Chart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const [date, setDate] = React.useState(new Date());
  const handleDateSelect = (newDate: any) => {
    setDate(newDate);
  };

  const data1 = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
    datasets: [
      {
        data: [
          193090000, 227990000, 210000000, 268000000, 228000000, 278000000,
          240000000, 300000000,
        ],
        fill: true,
        backgroundColor: "rgba(250, 160, 95, 0.15)",
        tension: 0.5,
        borderColor: " #FF993C",
      },
    ],
  };
  const data2 = {
    labels: ["30/5-7/5", "30/6-7/7", "30/7-7/8", "30/8-7/9"],
    datasets: [
      {
        data: [129090000, 127990000, 253000000, 218000000, 50000000],
        fill: true,
        backgroundColor: "rgba(250, 160, 95, 0.15)",
        tension: 0.5,
        borderColor: " #FF993C",
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          boxWidth: 0,
        },
      },
    },
  };

  const ShowCalenda = () => {
    const calen: any = document.getElementById("cale");
    if (calen.style.display === "none") {
      calen.style.display = "flex";
      const checktngay: any = document.getElementById("checkngay");
      checktngay.checked = true;
    } else {
      calen.style.display = "none";
    }
  };

  const ChangeChart = (id: string) => {
    const chartngay: any = document.getElementById("ngay");
    const charttuan: any = document.getElementById("tuan");
    const checkngay: any = document.getElementById("checkngay");
    const checktuan: any = document.getElementById("checktuan");
    checkngay.checked = false;
    checktuan.checked = false;
    if (chartngay.style.display === "none") {
      chartngay.style.display = "flex";
      charttuan.style.display = "none";
    } else {
      chartngay.style.display = "none";
      charttuan.style.display = "flex";
    }
    const checkon: any = document.getElementById(id);
    checkon.checked = true;
  };

  return (
    <>
      <section className="chart" id="chart">
        <div className="chart-main">
          <h3 className="title">Thống kê</h3>
          <div className="chart-main-box">
            <h2 className="heading"> Doanh thu</h2>
            <div className="date" onClick={() => ShowCalenda()}>
              <span>
                Tháng {date.getMonth() + 1}, {date.getFullYear()}
              </span>
              <span>
                <FiCalendar />
              </span>
            </div>
          </div>
          <div className="chart-line">
            <div id="ngay" className="home-line-chart">
              <Line data={data1} options={options} />
            </div>
            <div
              id="tuan"
              className="home-line-chart"
              style={{ display: "none" }}
            >
              <Line data={data2} options={options} />
            </div>
          </div>
          <div className="date-select" id="cale">
            <div className="date-moment">
              <span>
                <AiOutlineLeft />
              </span>
              <h4>{date.toLocaleDateString()}</h4>
              <span>
                <AiOutlineRight />
              </span>
            </div>
            <div className="input-select">
              <div className="input-select-box">
                <div className="checkbox-round">
                  <input
                    id="checkngay"
                    type="radio"
                    onChange={() => ChangeChart("checkngay")}
                  />
                </div>
                <p>Theo ngày</p>
              </div>
              <div className="input-select-box">
                <div className="checkbox-round">
                  <input
                    id="checktuan"
                    type="radio"
                    onChange={() => ChangeChart("checktuan")}
                  />
                </div>
                <p>Theo tuần</p>
              </div>
            </div>
            <DatePicker selected={date} onChange={handleDateSelect} />
          </div>
          <p className="desc">Tổng doanh thu theo tuần</p>
          <h5 className="sub-desc">
            525.145.000 <span>đồng</span>
          </h5>
          <Ellipse />
        </div>
      </section>
    </>
  );
};
export default Chart;
