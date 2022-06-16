import imguser from "../../images/imguser.png";
import { FiMail } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
const Header = () => {
  return (
    <>
      <section className="header" id="header">
        <div className="header-main">
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-content">
          <div className="header-content-box">
            <FiMail />
            <BiBell />
            <img src={imguser} alt="" className="imguser" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
