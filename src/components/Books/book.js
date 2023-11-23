import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiExpand } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Popup from "reactjs-popup";
import "./book.css";

const Book = (props) => {
  const { bookDetails } = props;
  const { books } = bookDetails;

  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
              <div className="section-title-center text-center">
                <span>Books Gallery</span>
                <h2>Popular Books</h2>
                <div className="section-divider divider-triangle"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {books.map((eachBook) => (
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="books">
                  <img
                    className="img-fluid"
                    src={eachBook.image}
                    alt={eachBook.title}
                  />
                  <span className="book-discount">
                    <span className="on-sale">-10%</span>
                  </span>
                  <ul className="function-icon">
                    <li>
                      <button className="icon">
                        <MdOutlineShoppingCart />
                      </button>
                    </li>
                    <li>
                      <div className="popup-container">
                        <Popup
                          modal
                          trigger={
                            <button
                              type="button"
                              className="trigger-button icon"
                            >
                              <BiExpand />
                            </button>
                          }
                        >
                          {(close) => (
                            <div className="modal-dialog modal-lg modal-dialog-centered modal-bg">
                              <div className="modal-content">
                                <div className="modal-wrapper">
                                  <div className="modal-wrapper-top">
                                    <h3>{eachBook.title}</h3>
                                    <button
                                      type="button"
                                      className="trigger-button close-icon"
                                      onClick={() => close()}
                                    >
                                      <IoMdClose />
                                    </button>
                                  </div>
                                  <div className="row modal-wrapper-bottom">
                                    <div className="col-lg-6 mb-4 mb-lg-0">
                                      <img
                                        src={eachBook.image}
                                        alt={eachBook.title}
                                        className="img-fluid w-100"
                                      />
                                    </div>
                                    <div className="col-lg-6">
                                      <p>
                                        Price: <span>{eachBook.price}</span>
                                      </p>
                                      <button type="button" className="add-to-carts-btn btns-primary">
                                        <span>
                                          <MdOutlineShoppingCart />
                                          Add to cart
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Popup>
                      </div>
                    </li>
                  </ul>
                  <div className="book-bottom-details">
                    <h3 className="book-title">{eachBook.title}</h3>
                    <p className="book-subTitle">{eachBook.subtitle}</p>
                    <div className="price">
                      Price:
                      <del>{eachBook.price}</del>{" "}
                      <span>{Number(eachBook.price) - 0.1}</span>
                    </div>
                    <div className="book-card-button">
                      <button className="add-to-carts-btn btns-primary">
                        <span>
                          <MdOutlineShoppingCart />
                          Add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="book-load-btn text-center mt-4">
            <button className="loader-btn btns-loaders">
              <span>Load More</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(Book);
