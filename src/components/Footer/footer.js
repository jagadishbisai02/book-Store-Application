import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoHelpBuoy } from "react-icons/io5";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer bg-warning bg-opacity-50">
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer-top">
              <h1 className="footer-title">Book Information ?</h1>
              <p>
                Information of any Book please send mail on Support@gmail.com
              </p>
            </div>
            <div className="col-md-6 help-line">
              <h1>
                <span>
                  <IoHelpBuoy />
                </span>
                Need Help?
              </h1>
              <p>
                Please call us at <a href="tel:0123456789">+91 0123456789</a>
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-icons">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="icons" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram className="icons" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF className="icons" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="icons" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
            </div>
            <hr />
            <div className="footer-bottom">
              <a href="/" className="footer-bottom-title">
                BOOKSHELF.
              </a>
              <p>
                <span>
                  <FaRegCopyright />
                </span>
                2023 All right reserved. Made with interested on web-templates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
