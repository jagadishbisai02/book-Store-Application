import "bootstrap/dist/css/bootstrap.min.css";
import "./cards.css";

const Cards = () => {
  return (
    <section className="offer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6 mb-4 mb-sm-0">
            <div className="offer-card h-100">
              <div className="row">
                <div className="col-lg-6">
                  <div className="offer-image">
                    <img
                      src="https://bookshelf-snowy.vercel.app/assets/images/book1.jpg"
                      alt="Book cover"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="offer-content">
                    <span className="badge-text">Sale Up To 10%</span>
                    <h3 className="title">
                      Innovation in Education (Hardcover)
                    </h3>
                    <p className="price">
                      Starting at: <span>$50.09</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 mb-4 mb-sm-0">
            <div className="offer-card h-100">
              <div className="row">
                <div className="col-lg-6">
                  <div className="offer-image">
                    <img
                      src="https://bookshelf-snowy.vercel.app/assets/images/book2.jpg"
                      alt="Book cover"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="offer-content">
                    <span className="badge-text">Sale Up To 15%</span>
                    <h3 className="title">
                      Innovation in Education (Hardcover)
                    </h3>
                    <p className="price">
                      Starting at: <span>$65.09</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
