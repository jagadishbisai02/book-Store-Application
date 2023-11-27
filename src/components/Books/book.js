import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiExpand } from "react-icons/bi";
import { IoMdClose, IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Popup from "reactjs-popup";
import { useState } from "react";
import "./book.css";

const Book = (props) => {
  const { bookDetails } = props;
  const { books } = bookDetails;
  const [addToCard, setAddToCard] = useState(false);
  const [count, setCount] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [index, setIndex] = useState(5);
  const initialBook = books.slice(0, index);

  const onAddCard = () => {
    setAddToCard(true);
  };

  const onDelete = () => {
    if (count === 1) {
      setAddToCard(false);
    }
  };

  const Counter = () => {
    setCount(count + 1);
  };

  const onLoadMore = () => {
    setIndex(index + 3);
    if (index >= initialBook.length) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  };

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
            {initialBook.map((eachBook) => (
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
                                      <div className="d-flex flex-column">
                                        <p>
                                          Price: <span>{eachBook.price}</span>
                                        </p>
                                        <button
                                          type="button"
                                          className="add-to-carts-btn btns-primary"
                                        >
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
                      {addToCard ? (
                        <div className="calculations">
                          <div className="calculations-btn">
                            <button type="button">
                              {count === 1 ? (
                                <span onClick={onDelete}>
                                  <MdDeleteOutline />
                                </span>
                              ) : (
                                <span onClick={() => setCount(count - 1)}>
                                  <FiMinus />
                                </span>
                              )}
                            </button>
                            <span>{count}</span>
                            <button type="button" onClick={Counter}>
                              <span>
                                <IoIosAdd />
                              </span>
                            </button>
                          </div>
                          <span>{eachBook.price * count}</span>
                        </div>
                      ) : (
                        <button className="add-to-carts-btn btns-primary">
                          <span onClick={onAddCard}>
                            <MdOutlineShoppingCart />
                            Add to cart
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isComplete ? (
            ""
          ) : (
            <div className="book-load-btn text-center mt-4">
              <button className="loader-btn btns-loaders" onClick={onLoadMore}>
                <span>Load More</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default withRouter(Book);
