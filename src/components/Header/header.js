import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas } from "react-bootstrap";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdOutlineAddIcCall } from "react-icons/md";
import RightSideBar from "../RightSideBar/rightSideBar";
import "./header.css";
import Backdrop from "../Backdrop/backdrop";

const Header = () => {
  const [show, setShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  let sideCart;
  let backdrop;

  if (cartShow) {
    sideCart = (
      <RightSideBar click={() => setCartShow(false)} show={cartShow} />
    );
    backdrop = <Backdrop click={() => setCartShow(false)} />;
  }

  return (
    <div className="header navbar-fixed bg-warning bg-opacity-50">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand navbar-light ">
            <button
              className="header-menu-btn"
              type="button"
              onClick={handleShow}
            >
              <span className="header-menu-btn-icon">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </span>
            </button>
            <Offcanvas
              show={show}
              onHide={handleClose}
              className="header-menu-offcanvas"
            >
              <Offcanvas.Header className="header-menu-top" closeButton>
                <div className="title-headers">Bookshelf</div>
              </Offcanvas.Header>
              <ul className="bs-scroll">
                <a href="/bookshelf-minimal">
                  <li>Bookshelf Minimal</li>
                </a>
                <a href="/bookshelf-modern">
                  <li>Bookshelf Modern</li>
                </a>
                <a href="/bookshelf-classic">
                  <li>Bookshelf Classic</li>
                </a>
                <a href="/all-books">
                  <li>All Books</li>
                </a>
              </ul>
            </Offcanvas>
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
            <button
              type="button"
              className="header-cart-btn"
              onClick={() => setCartShow(true)}
            >
              <CiShoppingCart className="icon" />
              <span>0</span>
            </button>
            {sideCart}
            {backdrop}
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
