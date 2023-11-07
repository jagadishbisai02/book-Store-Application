import "bootstrap/dist/css/bootstrap.min.css";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <>
      <div className="Footer mt-5 bg-warning">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-4">
              <a href="/" className="navbar-brand text-primary">
                <LibraryBooksRoundedIcon />
                BOOKSHELF.
              </a>
              <p>
                Information of any Book please send mail on Support@gmail.com
              </p>
              <div className="footer-icons text-primary">
                <TwitterIcon />
                <InstagramIcon />
                <FacebookIcon />
                <YouTubeIcon />
                <LinkedInIcon />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-4">
            
            </div>
            <div className="col-md-6 col-lg-4 col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
