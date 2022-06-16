import logoinsight from "../../images/logoinsight.png";
import imghome from "../../images/imghome.png";
import imgqlv from "../../images/imgqlv.png";
import imgcd from "../../images/imgcd.png";
import { Link, NavLink } from "react-router-dom";
const Menubar = () => {
  return (
    <>
      <section className="menubar" id="menubar">
        <div className="menubar-main">
          <img src={logoinsight} alt="" className="imgmenubar" />
          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/"
          >
            <img src={imghome} alt="" className="icondashboard" />
            Trang chủ
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/manage-ticket"
          >
            <img src={imgqlv} alt="" className="icondevice" />
            Quản lý vé
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "menubar-main-box active" : "menubar-main-box"
            }
            to="/change-ticket"
          >
            <img src={imgqlv} alt="" className="icondevice" />
            Đổi soát vé
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "menubar-main-box active setting"
                : "menubar-main-box setting"
            }
            to="/manage-role"
          >
            <img src={imgcd} alt="" className="iconsetting" />
            Cài đặt
            <div className="navigation">
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active " : "")}
                    to="/manage-role"
                  >
                    Gói dịch vụ
                  </NavLink>
                </li>
              </ul>
            </div>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Menubar;
