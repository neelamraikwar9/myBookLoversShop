import React from "react";
import useFetch from "../hook/useFetch";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background from "../components/Background";
import useBookContext from "../contexts/BookContext";

const Category = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    "https://category-data.vercel.app/categories"
  );
  console.log(data);

  // const handleCategoryClick = (cat) => {
  //   navigate(`/books/${cat.category}`);
  // };
  // console.log("checkding handlecategrory fucti", handleCategoryClick);

  const { books, setFilteredBooks} = useBookContext();
  console.log(books, "checking books......")

  const handleCategoryClick = (category) => {
    console.log(category, "checking category")
    const newFilteredBooks = books?.filter((book) => book.Category === category);
    console.log(newFilteredBooks, "filtered books");
    setFilteredBooks(newFilteredBooks);
    navigate(`/books/${category}`);
  };




  return (
    <div>
    <Background />
    <br/>
    <br/>

      {loading && <p>Loading...</p>}
      {error && <p>An error occured while fetching books.</p>}
      {data && data.length > 0 ? (
        <div className="row">
          {data?.map((cat) => (
            <div
              key={cat._id}
              onClick={() => handleCategoryClick(cat.category)}
              className="col-md-4"
            >
              <div className="container">
                <div className="card">
                  <img
                    src={cat.image}
                    alt={cat.category}
                    className="img-fluid"
                  />
                  <h4 className="text-center">📔{cat.category}📖</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
      <br/>
       <div className="container col-md-4 py-5">
       <div className="card">
       <Link to="/books">
        <img src="https://i.imghippo.com/files/yUC9826KOw.png" alt="All" className="img-fluid"/>
       </Link>
      <h4 className="text-center">📔All Books...📖</h4>
       </div>
       </div>
       <div>
       </div>
       <br/>
       <Footer />
    </div>
  );
};

export default Category;
