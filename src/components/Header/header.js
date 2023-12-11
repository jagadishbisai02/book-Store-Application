import "bootstrap/dist/css/bootstrap.min.css";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdOutlineAddIcCall } from "react-icons/md";
import "./header.css";

const Header = () => (
  <div className="header navbar-fixed bg-warning bg-opacity-50">
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand navbar-light ">
          <button className="header-menu-btn">
            <span className="header-menu-btn-icon">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </button>
          <a className="heading-logo" href="/">
            <h1 className="m-0">BOOKSHELF.</h1>
          </a>
          <div className="search-container">
            <form>
              <span className="header-search-icon">
                <CiSearch className="icon" />
              </span>
              <input type="text" placeholder="Search your book here" />
            </form>
          </div>
          <div className="header-call">
            <span>
              <MdOutlineAddIcCall className="icon" />
            </span>
            <a href="tel:6502431436">+916502431436</a>
          </div>
          <button type="button" className="header-cart-btn">
            <CiShoppingCart className="icon" />
            <span>0</span>
          </button>
        </nav>
      </div>
    </div>
  </div>
);
export default Header;
