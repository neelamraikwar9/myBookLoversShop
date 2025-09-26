import { useEffect } from "react";
import useBookContext from "../contexts/BookContext";

const PriceSlider = ({ price, setPrice }) => {
  const { allData, books, setBooks, parsePrice } = useBookContext();

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    console.log(price, "tioyui");
    console.log(books, "kvcklityjdsfklj");
  };

  console.log(books, "kvckljdsfklj");
  useEffect(() => {
    const dragSlider = (allData ?? []).filter((b) => {
      const isMatch = parsePrice(b.salePrice) <= price;
      console.log(
        `Comparing: ${parsePrice(b.salePrice)} <= ${price} =>`,
        isMatch
      );
      return isMatch;
    });
    setBooks(dragSlider);

    console.log(dragSlider, "dfkj6789");
  }, [price, allData]);

  return (
    <div className="container">
      <h5>Price Slider</h5>
      <h6>₹100 - ₹{price}</h6>

      <form>
        <label htmlFor="rangeInput">
          <input
            type="range"
            id="rangeInput"
            value={price}
            onChange={handlePriceChange}
            min={100}
            max={1600}
            step={100}
          />
        </label>
      </form>
    </div>
  );
};

export default PriceSlider;
