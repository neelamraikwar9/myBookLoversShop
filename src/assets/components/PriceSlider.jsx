import React from "react";
import { useEffect } from "react";
import useBookContext from "../contexts/BookContext";
// import { useParams } from "react-router-dom";

const PriceSlider = ({ price, setPrice }) => {
  const { allData, books, setBooks } = useBookContext();
  // const { category } = useParams();
  // console.log(category, "fkdgkdfs");
  // console.log( books && books.length, books, "uyeri")

  // const [price, setPrice] = useState(100);

  // console.log(allData, "djfljkd")
  // const boooks = allData?.filter((b) => b.category === category);
  // console.log(boooks, "hirek");

  function parsePrice(price) {
    if (typeof price === "string") {
      price = price.replace(/[^0-9.-]+/g, "");
    }
    const parsed = Number(price);
    return isNaN(parsed) ? 0 : parsed;
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    console.log(price, "tioyui");
    console.log(books, "kvcklityjdsfklj");
  };

//   useEffect(() => {
//   const dragSlider = (allData ?? []).filter((b) => parsePrice(b.salePrice) <= price);
//   setBooks(dragSlider);

//   // Use dragSlider here, not books
//   console.log(dragSlider, "Filtered books for slider");
// }, [price, allData]);

// // If you need to see updated books elsewhere:
// useEffect(() => {
//   console.log(books, "Updated books");
// }, [books]);





  console.log(books, "kvckljdsfklj")
  useEffect(() => {
    const dragSlider = (allData ?? []).filter((b) => {
      const isMatch = parsePrice(b.salePrice) <= price;
      console.log(`Comparing: ${parsePrice(b.salePrice)} <= ${price} =>`, isMatch);
      return isMatch;
    });
      setBooks(dragSlider)
    //   console.log(books, "kdjhf")

    
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
          // defaultValue={price}
          value={price}
          onChange={handlePriceChange}
          min={100}
          max={1600}
          step={100}
        />
      </label>
       {/* <button type="button" onClick={() => setPrice(price)}>Clear Slider🧹</button> */}
      </form>
    </div>
  );
};

export default PriceSlider;
