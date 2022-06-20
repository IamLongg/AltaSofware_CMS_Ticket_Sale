import imguser from "../../images/imguser.png";
import { FiMail } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <section className="header" id="header">
        <div className="header-main">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="icon-search">
            <AiOutlineSearch />
          </div>
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
