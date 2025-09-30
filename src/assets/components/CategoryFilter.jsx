import useFetch from "../hook/useFetch";
import { useEffect } from "react";
import useBookContext from "../contexts/BookContext";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const CategoryFilter = ({
  datafromcat,
  setCheckedTrue,
  catData,
  setCatData,
}) => {
  const navigate = useNavigate();

  const { allData, setBooks } = useBookContext();

  const { data, loading, error } = useFetch(
    "https://category-data.vercel.app/categories"
  );

  const { category } = useParams();
  console.log(category, "checking category useParams");

  useEffect(() => {
    if (data && data.length > 0) {
      const addedNewKey = data.map((item) => ({
        ...item,
        isChecked: false,
      }));

      datafromcat(addedNewKey);

      const checkedCheck = addedNewKey?.map((b) =>
        b.category === category ? { ...b, isChecked: true } : { ...b }
      );

      setCatData(checkedCheck);
    } else {
      data;
    }
  }, [data]);

  function updatedFilter(event, category) {
    const checked = event.target.checked;

    // Here updating to toggle isChecked of clicked category which is checked.
    const updatedCatData = catData?.map((b) =>
      b.category === category ? { ...b, isChecked: checked } : b
    );

    setCatData(updatedCatData);

    //finding all checked categories.
    const checkedCategories = updatedCatData
      .filter((cat) => cat.isChecked)
      .map((cat) => cat.category);

    setCheckedTrue(updatedCatData.filter((cat) => cat.isChecked));

    if (checkedCategories.length > 0) {
      // Filter books by checked categories
      const filteredBooks = allData.filter((book) =>
        checkedCategories.includes(book.category)
      );
      setBooks(filteredBooks);
    } else {
      setBooks(allData);
      navigate("/books");
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
                <div>
                  <label htmlFor={cat.category} key={cat.category}>
                    <input
                      type="checkbox"
                      onChange={(e) => updatedFilter(e, cat.category)}
                      id={cat.category}
                      value={true}
                      name={cat.category}
                      checked={cat?.isChecked}
                      style={{ marginRight: "8px" }}
                    />
                    {cat?.category}
                    <br />
                  </label>
                  <br />
                </div>
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
