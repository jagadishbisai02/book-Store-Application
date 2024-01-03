import { useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import './subscriber.css'

const Subscriber = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const inputValue = (event) => {
    setValue(event.target.value);
  };

  const onSubscribe = (event) => {
    event.preventDefault();
    if (value === "") {
      setMessage("0 - Please enter a value");
    } else if (value.indexOf("@") === -1) {
      setMessage("0 - An email address must contain a single @.");
    } else if (value.indexOf("gmail.com") === -1) {
      setMessage(
        ` 0 - The domain portion of the email address is invalid (the portionmafter the @: ${value}) `
      );
    } else {
      setMessage(
        "Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you."
      );
    }
    setValue("");
  };

  return (
    <>
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
                      {message.length === 0 ? (
                        ""
                      ) : (
                        <div className="message col mt-3">
                          <div className="alert alert-danger">{message}</div>
                        </div>
                      )}
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

export default Subscriber;
