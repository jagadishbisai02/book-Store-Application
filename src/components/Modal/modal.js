import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./modal.css";
import "bootstrap/dist/css/bootstrap.min.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Modal = (props) => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  });

  useEffect(() => {
    const getBooks = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      });

      const url = `https://api.itbook.store/1.0/books/${props.isbn13}`;
      const options = {
        method: "GET",
      };

      const response = await fetch(url, options);
      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
        setApiResponse((prevApiDetails) => ({
          ...prevApiDetails,
          status: apiStatusConstants.success,
          data: responseData,
        }));
      } else {
        setApiResponse((prevApiDetails) => ({
          ...prevApiDetails,
          status: apiStatusConstants.failure,
          errorMsg: responseData.error_msg,
        }));
      }
    };

    getBooks();
  }, []);

  if (!props.show) {
    return null;
  }

  const renderFailureView = () => {
    const { errorMsg } = apiResponse;
    return <div>{errorMsg}</div>;
  };

  const renderSuccessView = () => {
    const { data } = apiResponse;
    console.log(data);
    const updatedData = {
      authors: data.authors,
      description: data.desc,
      image: data.image,
      isbn10: data.isbn10,
      isbn13: data.isbn13,
      language: data.language,
      pages: data.pages,
      price: data.price,
      publisher: data.publisher,
      rating: data.rating,
      subtitle: data.subtitle,
      title: data.title,
      url: data.url,
      year: data.year,
    };

    return (
      <>
        <div className="modal-dialog modal-lg modal-dialog-centered modal-bg">
          <div className="modal-content">
            <div className="modal-wrapper">
              <div className="modal-wrapper-top">
                <h3>{updatedData.title}</h3>
                <button
                  type="button"
                  className="trigger-button close-icon"
                  onClick={props.close()}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="row modal-wrapper-bottom">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img
                    src={updatedData.image}
                    alt={updatedData.title}
                    className="img-fluid w-100"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-column">
                    <p>
                      Price: <span>{updatedData.price}</span>
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
      </>
    );
  };

  const renderModal = () => {
    const { status } = apiResponse;

    switch (status) {
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
};

export default Modal;
