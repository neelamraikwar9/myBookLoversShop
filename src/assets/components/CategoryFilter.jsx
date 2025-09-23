import React from "react";
import useFetch from "../hook/useFetch";
import { useEffect } from "react";
import useBookContext from "../contexts/BookContext";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CategoryFilter = ({
  datafromcat,
  checkedTrue,
  setCheckedTrue,
  catData,
  setCatData,
}) => {
  const navigate = useNavigate();

  const { allData, books, setBooks } = useBookContext();
  // console.log(books, "books");

  const { data, loading, error } = useFetch(
    "https://category-data.vercel.app/categories"
  );
  // console.log("Checking data", data);

  // const [catData, setCatData] = useState();  //uplifted to filter panel.
  // const [checkedTrue, setCheckedTrue] = useState([]);

  const { category } = useParams();
  console.log(category, "checking category useParams");

  useEffect(() => {
    if (data && data.length > 0) {
      const addedNewKey = data.map((item) => ({
        ...item,
        isChecked: false,
      }));
      //  setCatData(addedNewKey)
      datafromcat(addedNewKey);
      // console.log(addedNewKey, "Checking newData");

      // console.log(category, "chejkgvhtrfry", catData);
      const checkedCheck = addedNewKey?.map((b) =>
        b.category === category ? { ...b, isChecked: true } : { ...b }
      );
      // console.log(checkedCheck, "chedkingedkedfiltere");

      setCatData(checkedCheck);
    } else {
      data;
    }
  }, [data]);

  // console.log(catData, "Checking catData");

  function updatedFilter(event, category) {
    // const filtered = allData?.filter((b) => b.category === category);

    const checked = event.target.checked;
    // console.log(filtered, "dkfjdklf");
    // console.log(catData, "fkj")

    // Here we are updating to toggle isChecked of clicked category which is checked. when coming from landing page categories to the books page where we saw checked.
    const updatedCatData = catData?.map((b) =>
      b.category === category ? { ...b, isChecked: checked } : b
    );

    setCatData(updatedCatData);

    //finding all checked categories.
    const checkedCategories = updatedCatData
      .filter((cat) => cat.isChecked)
      .map((cat) => cat.category);
    console.log(checkedCategories, "yurifkjdf");

    setCheckedTrue(updatedCatData.filter((cat) => cat.isChecked));

    if (checkedCategories.length > 0) {
      // Filter books by checked categories
      const filteredBooks = allData.filter((book) =>
        checkedCategories.includes(book.category)
      );
      setBooks(filteredBooks);
    } else {
      // If no categories checked, reset to show all books
      setBooks(allData);
      navigate("/books"); // optional: to clear filters route
    }
  }

  return (
    <>
      <div className="container">
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while checking checkboxes.</p>}
        {data && data.length > 0 ? (
          <div>
            <h5>Category📙📘📗</h5>
            {catData?.map((cat) => {
              console.log(JSON.stringify(cat), "checking cat");
              console.log(cat, "jeofiwoeiowfie");

              return (
                <label
                  htmlFor={cat.category}
                  key={cat.category}
                  className="ms-3"
                >
                  <input
                    type="checkbox"
                    onChange={(e) => updatedFilter(e, cat.category)}
                    id={cat.category}
                    value={true}
                    name={cat.category}
                    checked={cat?.isChecked}
                  />
                  {cat?.category}
                  <br />
                </label>
              );
            })}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default CategoryFilter;
