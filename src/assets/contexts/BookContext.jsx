import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
// import { useNavigate } from "react-router-dom";

const BookContext = createContext();

 const useBookContext = () => useContext(BookContext);

export function BookProvider({ children }) {

  // const { data, loading, error } = useFetch(
  //   "https://selling-books-data.vercel.app/books"
  // );
  // console.log(data);

  const [books, setBooks] = useState();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);


 // Fetch all books once and store them
  useEffect(() => {
    fetch("https://selling-books-data.vercel.app/books")
      .then(response => response.json())
      .then(data => {
        setBooks(data);
        setFilteredBooks(data); // Initially, filtered books are all books
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);


   const value = {
    books, // Expose the complete list
    filteredBooks, // Expose the list to be rendered
    setFilteredBooks, // Expose the function to update the filtered list
    loading,
  };


   return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default useBookContext;