import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hook/useFetch";
// import { useParams } from 'react-router-dom';

const BookContext = createContext();

const useBookContext = () => useContext(BookContext);

export function BookProvider({ children }) {
  // const {category} = useParams();
  // console.log(category, "kdjfjkchagkcjf")
  
  const { data, loading, error } = useFetch(
    "https://selling-books-data.vercel.app/books"
  );
  console.log(data);

  const [books, setBooks] = useState(data);
  const [allData, setAllData] = useState(data);

  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
  });



  const [counter, setCounter] = useState(0);

  const [list, setList] = useState([]);
  const [dataTo, setDataTo] = useState(data);
  const [searchInput, setSearchInput] = useState('');

 

  useEffect(() => {
    if (data && data.length > 0) {
      setAllData(data);
    } else {
      data;
    }
  }, [data, allData]);

  //Function to add Card in a Cart page.
  const bookCartHandler = (_id) => {
    console.log(_id);

    const cartItem = data?.find((book) => book._id === _id);
    console.log(cartItem, "cartItem chekcing,.. ");
    setCart([...cart, cartItem]);
    console.log(cart, "checking cart...");

    //local storage..
    // localStorage.setItem('user', JSON.stringify(cartItem));
    // console.log(cart, "dfjkstoreu")

    const isInCart = cart?.some((car) => car._id === _id);

    console.log(isInCart, "checking cart");
  };



  //with the local storage I updated the function which is above.
    // const bookCartHandler = (bookId) => {
      // console.log(bookId, "fdk1jl")

       // Find the book object from data by ID
//   const book = data?.find((item) => item._id === bookId);
//   if (!book) {
//     console.warn("Book not found for id:", bookId);
//     return;
//   }



//       setCart((prevCart) => {
//         const exists = data?.find((item) => item._id == bookId);
//         console.log(exists, "exists")
//         if(exists) return prevCart;

//         if (prevCart.length <= 4) {
//       return [...prevCart, book];
//     } else {
//       alert('Cart limit reached (4 items max)');
//       return prevCart;
//     }
//   });
// };


useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);





  //  function to remove cart from cart page.
  function cartRemoveHandler(_id) {
    const updatedCart = cart.filter((car) => car._id !== _id);
    setCart(updatedCart);
  }

  function handleMoveWishlist(_id) {
    const moveWish = cart?.find((book) => book._id === _id);
    setList([...list, moveWish]);

    const autoRemoveCart = cart?.filter((book) => book._id !== _id);
    setCart(autoRemoveCart);
  }

  // Quantity Function for Cart Page.

  function quantity() {
    return (
      <span className="container ms-3">
        <i
          className="bi bi-plus-circle ms-5 ps-3"
          onClick={() => setCounter((count) => count + 1)}
        ></i>
        <span className="ms-2">{counter}</span>
        <i
          className="bi bi-dash-circle ms-2"
          onClick={() => setCounter((count) => count - 1)}
        ></i>
      </span>
    );
  }

  //Function to add card in a wishlist.
  function addToWishlist(_id) {
    const wishList = data?.find((book) => book._id === _id);
    setList([...list, wishList]);
  }

  function wishListRemoveHandler(_id) {
    const updateWishList = list?.filter((book) => book._id !== _id);
    setList(updateWishList);
  }

  function handleMoveCart(_id) {
    const moveCart = list?.find((book) => book._id === _id);
    setCart([...cart, moveCart]);

    const autoRemoveList = list?.filter((book) => book._id !== _id);
    setList(autoRemoveList);
  }

  // Function for Add to Wish List from book detail page.
  function handleAddToWish(_id) {
    const addToWish = books?.find((book) => book._id === _id);
    setList([...list, addToWish]);
    console.log(list, "checking list value");
  }

  // Function for Add to Cart from book detail page.
  function handleAddToCart(_id) {
    const addToCart = books?.find((book) => book._id === _id);
    setCart([...cart, addToCart]);
    console.log(cart, "checking cart value");
  }

  //Function addWish and addCart for more books which is below to book detail page.
  function handleAddWish(_id) {
    const addWish = books.find((book) => book._id === _id);
    setList([...list, addWish]);
  }

  function handleAddCart(_id) {
    const addCart = books.find((book) => book._id === _id);
    setCart([...cart, addCart]);
  }

  // All Filters
  useEffect(() => {
    if (data && data.length > 0) {
      setDataTo(data);
    } else {
      data;
    }
  }, [data, dataTo]);
  console.log(dataTo, "checking dataTo oncontext");


  //Function for search bar.

  function searchBarHandler(value){
    setSearchInput(value);
    console.log(searchInput, "frljkgd")
    // const filterData = allData.filter((item) => typeof item ==="string" && item.toLowerCase().includes(searchInput.toLowerCase()));
    const filterData = allData.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()));
    // console.log(allData, "gkkdf")
    console.log(filterData, "fjlkdf")
    setBooks(filterData);

  } 


  


  const value = {
    books,
    setBooks,
    allData,
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
    handleAddToWish,
    handleAddToCart,
    handleAddWish,
    handleAddCart,
    searchBarHandler,
    searchInput
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default useBookContext;
