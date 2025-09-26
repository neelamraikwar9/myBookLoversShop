import CategoryFilter from "../components/CategoryFilter";
import RatingButtons from "../components/RatingButtons";
import SortPrice from "../components/SortPrice";
import PriceSlider from "./PriceSlider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useBookContext from "../contexts/BookContext";

const FilterPanel = () => {
  const { setBooks, allData } = useBookContext();

  const navigate = useNavigate();

  const [checkedTrue, setCheckedTrue] = useState([]);
  const [price, setPrice] = useState(100);
  const [ratingg, setRatingg] = useState("0");
  const [sortOrder, setSortOrder] = useState("Default");
  const [catData, setCatData] = useState([]);
  const [newData, setNewData] = useState([]);

  const datafromcat = (data) => {
    console.log(data, "fweifjowei");
    setNewData(data);
  };

  function clearFilters() {
    navigate("/books");
    setCheckedTrue([]);
    setPrice(100);
    setRatingg("0");
    setSortOrder("Default");
    setBooks(allData);

    console.log(newData, "dfjowiefowefwf");
    const checkedCheck = newData?.map((b) => {
      return { ...b, isChecked: false };
    });
    setCatData(checkedCheck);
    console.log(checkedCheck, "kjhfg");
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center">
        <h2>Filters</h2>
        <button
          type="button"
          className="btn btn-outline-dark  ms-auto"
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>

      <PriceSlider price={price} setPrice={setPrice} />

      <br />

      <CategoryFilter
        datafromcat={datafromcat}
        checkedTrue={checkedTrue}
        setCheckedTrue={setCheckedTrue}
        catData={catData}
        setCatData={setCatData}
      />

      <RatingButtons
        ratingChangeHandler
        ratingg={ratingg}
        setRatingg={setRatingg}
      />

      <SortPrice sortOrder={sortOrder} setSortOrder={setSortOrder} />
    </div>
  );
};

export default FilterPanel;
