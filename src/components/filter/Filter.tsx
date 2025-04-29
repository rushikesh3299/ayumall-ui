// import { useProduct } from "../../context/index";
import "./filter.css";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, setShowFilterMobileNav, modifyFilter } from "../../store";

export const Filter = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch();
  const showFilterMobileNav = useTypedSelector(
    (state) => state.utility.showFilterMobileNav
  );
  const sortBy = useTypedSelector((state) => state.product.filter.sortBy);
  const categories = useTypedSelector(
    (state) => state.product.filter.categories
  );
  const rating = useTypedSelector((state) => state.product.filter.rating);

  return (
    <div
      className={
        showFilterMobileNav
          ? "filter-section filter-section-display"
          : "filter-section"
      }
    >
      <div
        className="filter-section-close"
        onClick={() => dispatch(setShowFilterMobileNav(false))}
      >
        <i className="fas fa-times"></i>
      </div>
      <div className="filter-title-bar">
        <span className="filter-title">Filter</span>
        <span
          className="filter-clear"
          onClick={() => dispatch(modifyFilter({ type: "CLEAR_ALL" }))}
        >
          Clear All
        </span>
      </div>
      <div className="filter-price">
        <div className="sort-title">SORT</div>
        <div className="sort-body">
          <label className="sort-div">
            <input
              type="radio"
              className="sort"
              name="sort_by_price"
              checked={sortBy === "HIGH_TO_LOW" ? true : false}
              onChange={() =>
                dispatch(modifyFilter({ type: "SORT", sortBy: "HIGH_TO_LOW" }))
              }
            />
            Price High to Low
          </label>
          <label className="sort-div">
            <input
              type="radio"
              className="sort"
              name="sort_by_price"
              checked={sortBy === "LOW_TO_HIGH" ? true : false}
              onChange={() =>
                dispatch(modifyFilter({ type: "SORT", sortBy: "LOW_TO_HIGH" }))
              }
            />
            Price Low to High
          </label>
        </div>
      </div>
      <div className="filter-categories">
        <div className="categories-title">Categories</div>
        <div className="categories-body">
          <label className="categories-div">
            <input
              type="checkbox"
              name=""
              id=""
              checked={categories.includes("Rasayana")}
              onChange={() => {
                dispatch(
                  modifyFilter({
                    type: "CATEGORIZE",
                    category: "Rasayana",
                  })
                );
              }}
            />
            Rasayana
          </label>
          <label className="categories-div">
            <input
              type="checkbox"
              name=""
              id=""
              checked={categories.includes("Avaleha")}
              onChange={() => {
                dispatch(
                  modifyFilter({
                    type: "CATEGORIZE",
                    category: "Avaleha",
                  })
                );
              }}
            />
            Avaleha
          </label>
          <label className="categories-div">
            <input
              type="checkbox"
              name=""
              id=""
              checked={categories.includes("Churna")}
              onChange={() => {
                dispatch(
                  modifyFilter({
                    type: "CATEGORIZE",
                    category: "Churna",
                  })
                );
              }}
            />
            Churna
          </label>
          <label className="categories-div">
            <input
              type="checkbox"
              name=""
              id=""
              checked={categories.includes("Vati")}
              onChange={() => {
                dispatch(
                  modifyFilter({
                    type: "CATEGORIZE",
                    category: "Vati",
                  })
                );
              }}
            />
            Vati
          </label>
        </div>
      </div>
      <div className="filter-rating">
        <div className="rating-title">Ratings</div>
        <div className="rating-body">
          <label>
            <input
              type="range"
              min="0"
              max="5"
              step="1"
              value={rating}
              onChange={(e) => {
                console.log(e.target.value);
                dispatch(
                  modifyFilter({
                    type: "RATE",
                    rating: e.target.value,
                  })
                );
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
