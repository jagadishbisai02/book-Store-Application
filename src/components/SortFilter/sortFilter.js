import "./sortFilter.css";
import { HiViewGrid, HiViewList } from "react-icons/hi";;


const SortFilters = (props) => {
  const { activeOptionId, sortbyOptions, booksList } = props;

  const onChangeSortby = (event) => {
    const { changeSortby } = props;
    changeSortby(event.target.value);
  };

  

  return (
    <>
      <div className="products-header">
        <div className="books-view">
          <button type="button" className="viewBtn">
            <HiViewGrid className="sort-icons"/>
          </button>
          <button type="button" className="viewBtn">
            <HiViewList className="sort-icons"/>
          </button>
        </div>
        <div className="available-book-list">
          <p>
            <span>{booksList.length} </span> Product Available
          </p>
        </div>
        <select value={activeOptionId} onChange={onChangeSortby}>
          {sortbyOptions.map((each) => (
            <option key={each.optionId} value={each.optionId}>
              {each.displayText}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default SortFilters;
