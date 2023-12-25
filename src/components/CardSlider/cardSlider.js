import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./cardSlider.css";

const CardSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div className="d-flex modern-card">
        <div className="col-6 g-0">
          <div className="ps-4">
            <h5 className="cards-title">New Books</h5>
            <p>Find all new books</p>
            <a
              href="/all-books"
              type="button"
              className="shop-now-btn book-shop-btns"
            >
              <span>Shop Now</span>
            </a>
          </div>
        </div>
        <div className="col-6 g-0">
          <img
            src="https://res.cloudinary.com/df5wssoz1/image/upload/v1702824367/samples/bookstore/books_jrzr7x.png"
            alt="new-books"
            className="cards-image"
          />
        </div>
      </div>
      <div className="d-flex modern-card">
        <div className="col-6 g-0">
          <div className="ps-3">
            <h5 className="cards-title">Use Coupon</h5>
            <p>Get 40% off with coupon</p>
            <a
              href="/all-books"
              type="button"
              className="shop-now-btn book-shop-btns"
            >
              <span>Shop Now</span>
            </a>
          </div>
        </div>
        <div className="col-6 g-0">
          <img
            src="https://res.cloudinary.com/df5wssoz1/image/upload/v1702824367/samples/bookstore/offer_vuirls.png"
            alt="new-books"
            className="cards-image"
          />
        </div>
      </div>
      <div className="d-flex modern-card">
        <div className="col-6 g-0">
          <div className="ps-3">
            <h5 className="cards-title">Running Offer</h5>
            <p>10% on every book</p>
            <a
              href="/all-books"
              type="button"
              className="shop-now-btn book-shop-btns"
            >
              <span>Shop Now</span>
            </a>
          </div>
        </div>
        <div className="col-6 g-0">
          <img
            src="https://res.cloudinary.com/df5wssoz1/image/upload/v1702824367/samples/bookstore/order_snjq7h.png"
            alt="new-books"
            className="cards-image"
          />
        </div>
      </div>
      <div className="d-flex modern-card">
        <div className="col-6 g-0">
          <div className="ps-3">
            <h5 className="cards-title">Fast Delivery</h5>
            <p>Delivery in 90 minutes</p>
            <a
              href="/all-books"
              type="button"
              className="shop-now-btn book-shop-btns"
            >
              <span>Shop Now</span>
            </a>
          </div>
        </div>
        <div className="col-6 g-0">
          <img
            src="https://res.cloudinary.com/df5wssoz1/image/upload/v1702824367/samples/bookstore/delivery_cmfxnr.png"
            alt="new-books"
            className="cards-image"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default CardSlider;
