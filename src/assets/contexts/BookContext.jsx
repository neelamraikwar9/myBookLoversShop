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
  

  //useStates for filters
  const [catFil, setCatFil] = useState();

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
  //  function updatedFilters(event){
  //   // console.log(event.target.value, event.target.checked)
  //   if(event.target.checked){
  //    const filtered = books?.filter((item) => item.category === value)    
  //     setCatFil([...catFil, filtered])
  //     console.log("filterd items", filtered)
  //   } else{
  //     setCatFil([...catFil.filter((item) => item.category !== value)])
  //   }
  //   console.log("checking cat filter: ", catFil)




  function updatedFilter(event){
    if(event.target.checked){
      const filtered = books?.filter((item) => item.category === value)   
      setCatFil([...catFil, event.target.value])
    } else{
      setCatFil([...catFil.filter((item) => item.category !== value)])
    }
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
    addToWishlist,
    list,
    updatedFilter,
    wishListRemoveHandler,
    handleMoveCart,
    handleMoveWishlist,
    quantity
    
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default useBookContext;
