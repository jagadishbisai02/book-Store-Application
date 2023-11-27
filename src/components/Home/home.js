import { useEffect, useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import LinearBuffer from "../Loader/loader";
import Book from "../Books/book";
import BookCarousel from "../Carousel/carousel";
import Cards from "../Cards/cards";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Home = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    bookDetails: null,
    errorMsg: null,
  });

  useEffect(() => {
    const getBookDeatils = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        bookDetails: null,
        errorMsg: null,
      });

      const apiUrl = "https://api.itbook.store/1.0/search/mongodb/2";
      const options = {
        method: "GET",
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok) {
        setApiResponse((prevData) => ({
          ...prevData,
          status: apiStatusConstants.success,
          bookDetails: data,
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

  const renderSuccessView = () => {
    const { bookDetails } = apiResponse;

    return (
      <>
        <BookCarousel bookDetails={bookDetails} />
        <Cards />
        <Book bookDetails={bookDetails} />
      </>
    );
  };

  const renderLoader = () => {
    return (
      <div className="d-flex justify-center items-center">
        <LinearBuffer />
      </div>
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

  return (
    <>
      <div className="home-container">
        <Header />
        {renderBookDetails()}
      </div>
    </>
  );
};
export default Home;
