import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiShoppingCart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import "./bookv2.css";

const BookV2 = (props) => {
  const { bookDetails } = props;
  const { books } = bookDetails;
  const [show, setShow] = useState(false);
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

  const showHide = show ? "details-show" : "";
  console.log(showHide);
  console.log(show);

  return (
    <section>
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
          {initialBook.map((each) => (
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className={`bookv2-item ${showHide}`}
                onClick={() => setShow(true)}
              >
                <div className="bookv2-item-top">
                  <div className="bookv2-item-top-image">
                    <img src={each.image} alt="book-images" />
                    <span className="books-book-discount">
                      <span className="on-sale">10%</span>
                    </span>
                  </div>
                  <div className="booksv2-item-top-content">
                    <h3>{each.title}</h3>
                    <p>{each.subtitle}</p>
                    <p>
                      Price: <span>{each.price}</span>
                    </p>
                  </div>
                </div>
                <div className="bookv2-item-details" show={show}>
                  <p>{each.subtitle}</p>
                  <ul className="row">
                    <li className="col-sm-6 mb-2">
                      <span className="title">Category</span>
                      <p>{each.category}</p>
                    </li>
                    <li className="col-sm-6">
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
                        </div>
                      ) : (
                        <button className="add-cart-btn add-carts">
                          <span onClick={onAddCard}>
                            <CiShoppingCart /> Add to Cart
                          </span>
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isComplete ? (
          ""
        ) : (
          <div className="text-center mt-4">
            <button className="load-more-btn load-more" onClick={onLoadMore}>
              <span>Load More</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookV2;
