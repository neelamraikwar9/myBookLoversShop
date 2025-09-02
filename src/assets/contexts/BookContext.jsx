import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
// import { useNavigate } from "react-router-dom";

const BookContext = createContext();

 const useBookContext = () => useContext(BookContext);

export function BookProvider({ children }) {

  const { data, error } = useFetch(
    "https://selling-books-data.vercel.app/books"
  );
  console.log(data);

  const [books, setBooks] = useState();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const [catFil, setCatFil] = useState([])


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


  //Function to add Cart in a Cart page.
  const bookCartHandler = (_id) => {
    console.log(_id);

    const cartItem = data?.find((book) => book._id === _id);
    console.log(cartItem, "cartItem chekcing,.. ");

    setCart([...cart, cartItem])

    console.log(cart, "Checking cart.... ")
  };

  //  function to remove cart from cart page.
  function cartRemoveHandler(_id){
    const updatedCart = cart.filter((car) => car._id !== _id)
    setCart(updatedCart)
  }


  //Function to reload NavLink and Link of '/Books' page.
  // function reloadHandler(){
  //   if(window.location.books === '/books'){
  //     window.location.reload();
  //   }
  // };  // window.location.reload worked directly on the NavLink.

  function updatedFilters(event){
    console.log(event.target.value, event.target.checked)
    if(event.target.checked){
     const filtered = data.filter((item) => item.category === value)    
      setCatFil([...catFil, filtered])
    } else{
      setCatFil([...catFil.filter((item) => item.category !== value)])
    }
  }

  
   const value = {
    books, // Expose the complete list
    filteredBooks, // Expose the list to be rendered
    setFilteredBooks, // Expose the function to update the filtered list
    loading,
    bookCartHandler,
    cart,
    cartRemoveHandler,
    updatedFilters
   
  };


   return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default useBookContext;