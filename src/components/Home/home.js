import { useEffect, useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import LinearBuffer from "../Loader/loader";
import Book from "../Books/book";
import BookCarousel from "../Carousel/carousel";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Cards from "../Cards/cards";
import Subscribe from "../Subscribe/subscribe";
import "./home.css";

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
  const [subscribed, setSubscribed] = useState(false);
  const [value, setValue] = useState("");

  const inputValue = (event) => {
    setValue(event.target.value);
  };

  const onSubscribe = (event) => {
    event.preventDefault();
    setSubscribed(!subscribed);
    if (subscribed) {
      emailValidation();
    }
    setValue("");
  };

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

  const emailValidation = (subscribed) => {
    switch (subscribed) {
      case value === "":
        return <p>0 - Please enter a value</p>;
      case value.includes(!"@"):
        return <p>0 - An email address must contain a single @.</p>;
      case value.includes(!"gmail.com"):
        return (
          <p>
            0 - The domain portion of the email address is invalid (the portion
            after the @: )
          </p>
        );
      default:
        return null;
    }
  };

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
        <div className="section-padding subscriber">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="row subscriber-wrapper">
                  <div className="col-md-5 mb-4 mb-md-0 subscribe-wrapper-images">
                    <div
                      className="subscriber-images"
                      style={{
                        backgroundImage:
                          'url("https://res.cloudinary.com/df5wssoz1/image/upload/v1701147466/samples/bookstore/cover-1_qxzdqh.jpg")',
                      }}
                    ></div>
                  </div>
                  <div className="col-md-7">
                    <div className="subscriber-content">
                      <h3 className="subscriber-content-title display-6">
                        Join Our Community
                      </h3>
                      <p className="subscriber-content-subtitle">
                        Sign up & get 10% of your first books.
                      </p>
                      <form>
                        <div className="input">
                          <input
                            type="email"
                            required
                            onChange={inputValue}
                            value={value}
                            placeholder="Your email"
                          />
                          <button
                            type="submit"
                            className="subscribe-btn subscriber-btns"
                            onClick={onSubscribe}
                          >
                            <span>Subscribe</span>
                          </button>
                        </div>
                        {subscribed
                          ? { emailValidation }
                          : // <div className="alert alert-success mt-3">
                            //   Almost finished... We need to confirm your email
                            //   address. To complete the subscription process,
                            //   please click the link in the email we just sent you.
                            // </div>
                            ""}
                      </form>
                      <ul className="subscriber-content-social mt-3">
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GrFacebookOption />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <IoLogoTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaLinkedinIn />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaYoutube />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
