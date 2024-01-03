import Header from "../Header/header";
import Footer from "../Footer/footer";
import Book from "../Books/book";
import BookCarousel from "../Carousel/carousel";
import Subscriber from "../Subscribers/subscriber";
import Cards from "../Cards/cards";
import "./bookshelf-minimal.css";

const BookshelfMinimal = () => {
  return (
    <>
      <div className="home-container">
        <Header />
        <BookCarousel />
        <Cards />
        <Book />
        <Subscriber />
        <Footer />
      </div>
    </>
  );
};
export default BookshelfMinimal;
