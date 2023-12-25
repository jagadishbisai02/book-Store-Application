import { useState } from "react";
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

const BookCarousel = (props) => {
  const { bookDetails } = props;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="section-bg mt-3 pt-4 container">
      <Carousel
        data-bs-theme="dark"
        activeIndex={index}
        onSelect={handleSelect}
        className="bg-gray-0"
      >
        {bookDetails.books.map((eachBook) => (
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-md-7 col-lg-6 mb-4 mb-lg-0">
                <h5 className="display-4 book-title mb-4 text-capitalize">
                  {eachBook.title}
                </h5>
                <p className="text-muted mb-5 fs-5">{eachBook.subtitle}</p>
                <Link to='/all-books'
                  type="button"
                  className="shop-now-btn book-shop-btns"
                >
                  <span>Shop Now</span>
                </Link>
              </div>
              <div className="col-md-5 offset-lg-1 text-center">
                <img
                  className="d-block w-30 image-height"
                  src={eachBook.image}
                  alt={eachBook.title}
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
  // const [current, setCurrent] = useState(0);
  // const length = bookDetails.books.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // if (!Array.isArray(bookDetails.books) || bookDetails.books.length <= 0) {
  //   return null;
  // }

  // return (
  //   <section className="slider">
  //     <div className="container-fluid hero">
  //       <div className="col-12">
  //         <AiOutlineLeft className="left-arrow" onClick={prevSlide} />
  //         <AiOutlineRight className="right-arrow" onClick={nextSlide} />
  //         {bookDetails.books.map((slide, index) => {
  //           return (
  //             <div
  //               className={index === current ? "slide active" : "slide"}
  //               key={index}
  //             >
  //               {index === current && (
  //                 <div className="slider-content-image">
  //                   <div className="btn-content col-12 col-lg-6">
  //                     <h1 className="book-title">{slide.title}</h1>
  //                     <button type="button" className="shop-btn">
  //                       Shop Now
  //                     </button>
  //                   </div>
  //                   <img
  //                     src={slide.image}
  //                     alt={slide.title}
  //                     className="image w-30"
  //                   />
  //                 </div>
  //               )}
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default BookCarousel;
