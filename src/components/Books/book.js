import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiExpand } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import Loader from "react-loader-spinner";
import Popup from "reactjs-popup";
import Modal from "../Modal/modal";
import "./book.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Book = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    bookDetails: null,
    errorMsg: null,
  });

  const [addToCard, setAddToCard] = useState(false);
  const [count, setCount] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [index, setIndex] = useState(6);
  let initialBook;

  useEffect(() => {
    const getBookDeatils = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        bookDetails: null,
        errorMsg: null,
      });

      const apiUrl = "https://api.itbook.store/1.0/new";
      const options = {
        method: "GET",
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setApiResponse((prevData) => ({
          ...prevData,
          status: apiStatusConstants.success,
          bookDetails: data.books,
        }));
      } else {
        setApiResponse((prevData) => ({
          ...prevData,
          status: apiStatusConstants.failure,
          errorMsg: data.error_msg,
        }));
      }
    };
    getBookDeatils();
  }, []);

  const renderFailureView = () => {
    const { errorMsg } = apiResponse;
  };

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
    setIndex(index + 6);
    if (index > initialBook.length) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  };

  const renderLoader = () => {
    return (
      <div className="loader-container">
        <Loader type="Oval" color="#943E3E" height="50" width="50" />
      </div>
    );
  };

  const renderSuccessView = () => {
    const { bookDetails } = apiResponse;
    initialBook = bookDetails.slice(0, index);
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
                        <button className="icon" onClick={onAddCard}>
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
                                    <Modal isbn13={eachBook.isbn13} />
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
                <button
                  className="loader-btn btns-loaders"
                  onClick={onLoadMore}
                >
                  <span>Load More</span>
                </button>
              </div>
            )}
          </div>
        </section>
      </>
    );
  };

  const renderBookDetails = () => {
    const { status } = apiResponse;

    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoader();
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return <>{renderBookDetails()}</>;
};

export default Book;
