import { useState, useEffect } from "react";
import Header from "../Header/header";
import Loader from "react-loader-spinner";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiViewGrid, HiViewList } from "react-icons/hi";
import { BiExpand } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import Popup from "reactjs-popup";
import Modal from "../Modal/modal";
import FiltersGroup from "../Filters/filters";
import "./allBooks.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const sortbyOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Price (Low-High)",
  },
  {
    optionId: "A-Z",
    displayText: "(a-z)",
  },
  {
    optionId: "Z-A",
    displayText: "(z-a)",
  },
];

const ratingsList = [
  {
    ratingId: "4",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png",
  },
  {
    ratingId: "3",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png",
  },
  {
    ratingId: "2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png",
  },
  {
    ratingId: "1",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png",
  },
];

const AllBooks = () => {
  const [apiResponse, setApiResponse] = useState({
    booksList: [],
    apiStatus: apiStatusConstants.initial,
    activeOptionId: sortbyOptions[0].optionId,
    activeCategoryId: "",
    searchInput: "",
    activeRatingId: "",
  });
  const [view, setView] = useState(false);

  const onChangeSortby = (event) => {
    changeSortby(event.target.value);
  };

  const [addToCard, setAddToCard] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const { activeOptionId, activeCategoryId, searchInput, activeRatingId } =
      apiResponse;
    const getBookLists = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        booksList: null,
        errorMsg: null,
      });

      const apiUrl = `https://api.itbook.store/1.0/new`;
      const options = {
        method: "GET",
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setApiResponse((prevData) => ({
          ...prevData,
          status: apiStatusConstants.success,
          booksList: data.books,
        }));
      } else {
        setApiResponse((prevData) => ({
          ...prevData,
          status: apiStatusConstants.failure,
          errorMsg: data.error_msg,
        }));
      }
    };
    getBookLists();
  }, []);

  const clearFilters = (getBookLists) => {
    apiResponse(
      {
        searchInput: "",
        activeCategoryId: "",
        activeRatingId: "",
      },
      getBookLists()
    );
  };

  const changeSortby = (activeOptionId, getBookLists) => {
    setApiResponse({ activeOptionId }, getBookLists());
  };

  const changeRating = (activeRatingId, getBookLists) => {
    setApiResponse({ activeRatingId }, getBookLists());
  };

  const changeCategory = (activeCategoryId, getBookLists) => {
    setApiResponse({ activeCategoryId }, getBookLists());
  };

  const enterSearchInput = (getBookLists) => {
    getBookLists();
  };

  const changeSearchInput = (searchInput) => {
    setApiResponse({ searchInput });
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

  const renderLoader = () => {
    return (
      <div className="loader-container">
        <Loader type="Oval" color="#943E3E" height="50" width="50" />
      </div>
    );
  };

  const renderSuccessView = () => {
    const { booksList, activeOptionId } = apiResponse;
    console.log(booksList)
    const gridView = view ? "viewBtn " : "viewBtn active";
    const listView = view ? "viewBtn active" : "viewBtn";
    return (
      <>
        <div className="col-md-9 sort-filters-header">
          <>
            <div className="products-header">
              <div className="books-view">
                <button
                  type="button"
                  className={`${gridView}`}
                  onClick={() => setView(false)}
                >
                  <HiViewGrid className="sort-icons" />
                </button>
                <button
                  type="button"
                  className={`${listView}`}
                  onClick={() => setView(true)}
                >
                  <HiViewList className="sort-icons" />
                </button>
              </div>
              <div className="available-book-list">
                <p>
                  <span>{booksList.length} </span> Product Available
                </p>
              </div>
              <div className="sort-selection">
                <form action="#">
                  <label for="sort"></label>
                  <select
                    value={activeOptionId}
                    onChange={onChangeSortby}
                    name="sort"
                    id="sort"
                  >
                    {sortbyOptions.map((each) => (
                      <option key={each.optionId} value={each.optionId}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            </div>
          </>

          <div className="row justify-content-center">
            {booksList.map((eachBook) => (
              <>
                {view ? (
                  <div className="col-12 mb-4">
                    <div className="books-list-view">
                      <div className="row">
                        <div className="col-5">
                          <div className="book-list-left">
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
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="book-bottom-details">
                            <h3 className="book-title">{eachBook.title}</h3>
                            <p className="book-subTitle">{eachBook.subtitle}</p>
                            <div className="price">
                              Price:
                              <del>{eachBook.price}</del>{" "}
                              <span>{eachBook.retailer}</span>
                            </div>
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
                              <button className="add-to-carts-btn add-to-cart">
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
                  </div>
                ) : (
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="books-grid-view">
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
                          <span>{eachBook.retailer}</span>
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
                            <button className="add-to-carts-btn add-to-cart">
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
                )}
              </>
            ))}
          </div>
        </div>
      </>
    );
  };

  const renderFailureView = () => {
    const { errorMsg } = apiResponse;
  };

  const renderBooksList = () => {
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

  const renderFilter = () => {
    const { searchInput, activeRatingId } = apiResponse;

    return (
      <>
        <FiltersGroup
          searchInput={searchInput}
          ratingsList={ratingsList}
          changeSearchInput={changeSearchInput}
          enterSearchInput={enterSearchInput}
          activeRatingId={activeRatingId}
          changeCategory={changeCategory}
          changeRating={changeRating}
          clearFilters={clearFilters}
        />
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="all-books-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">{renderFilter()}</div>
            {renderBooksList()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
