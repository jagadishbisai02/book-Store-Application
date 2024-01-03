import { useState } from "react";
import "./filters.css";

const FiltersGroup = (props) => {
  const { searchInput } = props;
  const [value, setValue] = useState(0);
  const MAX = 250.0;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    };
  };

  const onEnterSearchInput = (event) => {
    const { enterSearchInput } = props;
    console.log(enterSearchInput);
    if (event.key === "Enter") {
      enterSearchInput();
    }
  };

  const onChangeSearchInput = (event) => {
    const { changeSearchInput } = props;
    changeSearchInput(event.target.value);
  };

  const renderRatingsFiltersList = () => {
    const { ratingsList } = props;

    return ratingsList.map((rating) => {
      const { changeRating, activeRatingId } = props;
      const ratingClassName =
        activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`;

      const onClickRatingItem = () => changeRating(rating.ratingId);

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      );
    });
  };

  return (
    <>
      <div className="filter">
        <div className="filter-item">
          <input
            value={searchInput}
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={onChangeSearchInput}
            onKeyDown={onEnterSearchInput}
          />
        </div>
        <div className="filter-item">
          <div>
            <h1 className="rating-heading">Rating</h1>
            <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
          </div>
        </div>
        <div className="filter-item">
          <p className="filter-title">Price</p>
          <p className="amount">USA{value}</p>
          <input
            type="range"
            min="0"
            max={MAX}
            onChange={(e) => setValue(e.target.value)}
            style={getBackgroundSize()}
            value={value}
            className="range-slider"
          />
        </div>
      </div>
    </>
  );
};
export default FiltersGroup;
