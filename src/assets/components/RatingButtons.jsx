import { useEffect } from "react";
import useBookContext from "../contexts/BookContext";
import { useParams } from "react-router-dom";

const RatingButtons = ({ ratingg, setRatingg }) => {
  const { allData, books, setBooks } = useBookContext();

  const { category } = useParams();
  console.log(category, "gjkri");

  function ratingChangeHandler(event) {
    const selectedRate = event.target.value;
    console.log(selectedRate, "uyr4");
    setRatingg(selectedRate);
  }

  useEffect(() => {
    if (ratingg !== null) {
      const filteredItem = (books ?? []).filter((item) => {
        return Number(item.rating) >= Number(ratingg);
      });

      setBooks([...filteredItem]);
    }
  }, [ratingg, allData]);

  return (
    <>
      <div className="container py-3">
        <h5 className="">Rating</h5>

        <input
          type="radio"
          name="rating"
          id="four"
          value="4"
          checked={ratingg === "4"}
          onChange={ratingChangeHandler}
        />
        <label htmlFor="four">⭐⭐⭐⭐ and above</label>
        <br />

        <input
          type="radio"
          name="rating"
          id="three"
          value="3"
          checked={ratingg === "3"}
          onChange={ratingChangeHandler}
        />
        <label htmlFor="three">⭐⭐⭐ and above</label>
        <br />

        <input
          type="radio"
          name="rating"
          id="two"
          value="2"
          checked={ratingg === "2"}
          onChange={ratingChangeHandler}
        />
        <label htmlFor="two">⭐⭐ and above</label>
        <br />

        <input
          type="radio"
          name="rating"
          id="one"
          value="1"
          checked={ratingg === "1"}
          onChange={ratingChangeHandler}
        />
        <label htmlFor="one">⭐ and above</label>
      </div>
    </>
  );
};

export default RatingButtons;
