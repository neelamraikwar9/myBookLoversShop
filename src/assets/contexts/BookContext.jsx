import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hook/useFetch";

const BookContext = createContext();

 const useBookContext = () => useContext(BookContext);

export function BookProvider({ children }) {

  const { data, loading, error } = useFetch(
    "https://selling-books-data.vercel.app/books"
  );
  console.log(data);


  const [books, setBooks] = useState(data);
  const [dataget, setDataGet] = useState(data);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if(data && data.length > 0){
      setDataGet(data)
    } else{
      data
    }
  }, [data, dataget])


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

  
   const value = {
    books,
    setBooks, 
    dataget,
    loading,
    error,
    loading,
    bookCartHandler,
    cart,
    cartRemoveHandler,
    
  };


   return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default useBookContext;