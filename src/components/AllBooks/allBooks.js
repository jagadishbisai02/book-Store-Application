import { Component } from "react";
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

class AllBooks extends Component {
  state = {
    booksList: [],
    apiStatus: apiStatusConstants.initial,
    activeOptionId: sortbyOptions[0].optionId,
    activeCategoryId: "",
    searchInput: "",
    activeRatingId: "",
    view: false,
    addToCard: false,
    count: 1,
  };

  componentDidMount() {
    this.getBookList();
  }

  getBookList = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const { searchInput, activeOptionId, activeCategoryId, activeRatingId } =
      this.state;
    const apiUrl = `https://api.itbook.store/1.0/new?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    const Updated = data.books.map((each) => ({
      image: each.image,
      isbn13: each.isbn13,
      price: each.price,
      subtitle: each.subtitle,
      title: each.title,
    }));

    if (response.ok) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        booksList: Updated,
      });
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
        booksList: data.error_msg,
      });
    }
  };

  changeSortby = (activeOptionId) => {
    this.setState({ activeOptionId }, this.getBookList());
  };

  changeRating = (activeRatingId) => {
    this.setState({ activeRatingId }, this.getBookList());
  };

  changeCategory = (activeCategoryId) => {
    this.setState({ activeCategoryId }, this.getBookList());
  };

  enterSearchInput = () => {
    this.getBookList();
  };

  changeSearchInput = (searchInput) => {
    this.setState({ searchInput });
  };

  onChangeSortby = (event) => {
    this.changeSortby(event.target.value);
  };

  clearFilters = () => {
    this.setState(
      {
        searchInput: "",
        activeCategoryId: "",
        activeRatingId: "",
      },
      this.getBookList
    );
  };

  renderLoader = () => {
    return (
      <div className="loader-container">
        <Loader type="Oval" color="#943E3E" height="50" width="50" />
      </div>
    );
  };

  renderFailureView = () => {
    const { errorMsg } = this.state;
  };

  gridViewCard = () => {
    this.setState({ view: false });
  };

  listViewCard = () => {
    this.setState((prev) => ({ view: !prev.view }));
  };

  onAddCard = () => {
    this.setState((prev) => ({ addToCard: !prev.addToCard }));
  };

  plus = () => {
    this.setState((prevCount) => ({ count: prevCount.count + 1 }));
  };

  minus = () => {
    this.setState((prevCount) => ({ count: prevCount.count - 1 }));
  };

  onDelete = () => {
    const { count } = this.state;
    if (count === 1) {
      this.setState({ addToCard: false });
    }
  };

  renderSuccessView = () => {
    const { booksList, activeOptionId, view, count, addToCard } = this.state;
    const gridView = view ? "viewBtn " : "viewBtn active";
    const listView = view ? "viewBtn active" : "viewBtn";

    return (
      <div className="col-md-9 sort-filters-header">
        <>
          <div className="products-header">
            <div className="books-view">
              <button
                type="button"
                className={`${gridView}`}
                onClick={this.gridViewCard}
              >
                <HiViewGrid className="sort-icons" />
              </button>
              <button
                type="button"
                className={`${listView}`}
                onClick={this.listViewCard}
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
                  onChange={this.onChangeSortby}
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
                              <button className="icon" onClick={this.onAddCard}>
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
                                    <span onClick={this.onDelete}>
                                      <MdDeleteOutline />
                                    </span>
                                  ) : (
                                    <span onClick={this.minus}>
                                      <FiMinus />
                                    </span>
                                  )}
                                </button>
                                <span>{count}</span>
                                <button type="button" onClick={this.plus}>
                                  <span>
                                    <IoIosAdd />
                                  </span>
                                </button>
                              </div>
                              <span>{eachBook.price * count}</span>
                            </div>
                          ) : (
                            <button className="add-to-carts-btn add-to-cart">
                              <span onClick={this.onAddCard}>
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
                        <button className="icon" onClick={this.onAddCard}>
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
                                  <span onClick={this.onDelete}>
                                    <MdDeleteOutline />
                                  </span>
                                ) : (
                                  <span onClick={this.minus}>
                                    <FiMinus />
                                  </span>
                                )}
                              </button>
                              <span>{count}</span>
                              <button type="button" onClick={this.plus}>
                                <span>
                                  <IoIosAdd />
                                </span>
                              </button>
                            </div>
                            <span>{eachBook.price * count}</span>
                          </div>
                        ) : (
                          <button className="add-to-carts-btn add-to-cart">
                            <span onClick={this.onAddCard}>
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
    );
  };

  renderFilter = () => {
    const { searchInput, activeRatingId } = this.state;

    return (
      <>
        <FiltersGroup
          searchInput={searchInput}
          ratingsList={ratingsList}
          changeSearchInput={this.changeSearchInput}
          enterSearchInput={this.enterSearchInput}
          activeRatingId={activeRatingId}
          changeCategory={this.changeCategory}
          changeRating={this.changeRating}
          clearFilters={this.clearFilters}
        />
      </>
    );
  };

  renderBooksList = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader();
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="all-books-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">{this.renderFilter()}</div>
              {this.renderBooksList()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AllBooks;
