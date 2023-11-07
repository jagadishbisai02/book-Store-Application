import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const BookCarousel = (props) => {
  const { bookDetails } = props;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="dark" onSelect={handleSelect}>
      {bookDetails.map((book, index) => {
        return (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={book.imgae} alt={book.title} />
            <Carousel.Caption>
              <h5>{book.title}</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default BookCarousel;
