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
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);
  // const [dataTo, setDataTo] = useState(data);
  

  //useStates for filters
  // const [catFil, setCatFil] = useState();

  // const [inCart, setInCart] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setDataGet(data);
    } else {
      data;
    }
  }, [data, dataget]);

  //Function to add Cart in a Cart page.
  const bookCartHandler = (_id) => {
    console.log(_id);
    
    const cartItem = data?.find((book) => book._id === _id);
    console.log(cartItem, "cartItem chekcing,.. ");
    setCart([...cart, cartItem]);

   
    // console.log(cart, "Checking cart.... ")
    // console.log("checking items in cart", cart)

    const isInCart = cart?.some((car) => car._id === _id);
    
    console.log(isInCart, "checking cart")
  };



  //  function to remove cart from cart page.
  function cartRemoveHandler(_id) {
    const updatedCart = cart.filter((car) => car._id !== _id);
    setCart(updatedCart);
  }

  function handleMoveWishlist(_id){
    const moveWish = cart?.find((book) => book._id === _id)
    setList([...list, moveWish])

    const autoRemoveCart = cart?.filter((book) => book._id !== _id)
    setCart(autoRemoveCart)

  }


  // Quantity Function for Cart Page.

  function quantity(){
    return (
      <div className="container">
        <i className="bi bi-plus-circle ms-5" onClick={() => setCounter((count) => count + 1)}></i>
         <span>{counter}</span>
        <i className="bi bi-dash-circle" onClick={() => setCounter((count) => count - 1)}></i>
      </div>
    )
  }







  //Function to add card in a wishlist.
  function addToWishlist(_id){
    const wishList = data?.find((book) => book._id === _id)
    setList([...list, wishList])
  }

  function wishListRemoveHandler(_id){
    const updateWishList = list?.filter((book) => book._id !== _id)
    setList(updateWishList);
  }

  function handleMoveCart(_id){
    const moveCart = list?.find((book) => book._id === _id)
    setCart([...cart, moveCart])

    const autoRemoveList = list?.filter((book) => book._id !== _id)
    setList(autoRemoveList)
  }



  // All Filters 
  //  useEffect(() => {
  //   if (data && data.length > 0) {
  //     setDataTo(data);
  //   } else {
  //     data;
  //   }
  // }, [data, dataget]);

  // function updatedFilter(event){
  //   const {checked, value} = event.target;
  //   console.log(checked, "checking checked on fun")
    
  //     console.log(dataget, "checing data at funciton")
  //     console.log(value, "checing valie at funciton")
  //     const filtered = dataget?.filter((item) => item.category === value)   
  //     setBooks(filtered)
  //     // setCatFil([filtered])
  //     console.log("checking at funct books", books)
  // }
  




 



  




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
    addToWishlist,
    list,
    wishListRemoveHandler,
    handleMoveCart,
    handleMoveWishlist,
    quantity,
    
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default useBookContext;
