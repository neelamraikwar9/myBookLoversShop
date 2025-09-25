import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hook/useFetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookContext = createContext();

const useBookContext = () => useContext(BookContext);

export function BookProvider({ children }) {
  const { data, loading, error } = useFetch(
    "https://selling-books-data.vercel.app/books"
  );
  console.log(data, "fdjklkjfd");

  const [books, setBooks] = useState(data);
  const [allData, setAllData] = useState(data);

  //  const [cart, setCart] = useState([]); // early state without using local storage.

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    // console.log(savedCart, "kjhfkljdf")
    return savedCart ? JSON.parse(savedCart) : [];
    console.log(savedCart, "kjhfkljdf");
  });

  // const [list, setList] = useState();
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("wishList");
    return savedList ? JSON.parse(savedList) : [];
  });

  const [dataTo, setDataTo] = useState(data);
  const [searchInput, setSearchInput] = useState("");

  const [saveData, setSaveData] = useState(() => {
    const stored = localStorage.getItem("formData");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setAllData(data);
    } else {
      data;
    }
  }, [data, allData]);

  //Function to add Card in a Cart page.
  const bookCartHandler = (_id) => {
    // console.log(_id);

    const cartItem = data?.find((book) => book._id === _id);
    console.log(cartItem, "cartItem chekcing,.. ");
    setCart([...cart, cartItem]);
    console.log(cart, "checking cart...");

    toast.success("Book added to Cart.", {
      autoClose: 3000, // 3 seconds
    });
  };

  //local storage..    Adding cart to local storage.

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart, "dfjkstoreu");
  }, [cart]);

  //  function to remove cart from cart page.
  function cartRemoveHandler(_id) {
    const updatedCart = cart.filter((car) => car._id !== _id);
    setCart(updatedCart);
  }

  // function handleMoveWishlist(_id) {
  //   const moveWish = cart?.find((book) => book._id === _id);
  //   setList([...list, moveWish]);

  //   const autoRemoveCart = cart?.filter((book) => book._id !== _id);
  //   setCart(autoRemoveCart);
  // }

  function handleMoveWishlist(bookId) {
    const moveWish = cart?.find((book) => book._id === bookId);
    const existingInWishlist = list?.find((book) => book._id === bookId);

    let updatedWishlist;
    if (existingInWishlist) {
      updatedWishlist = list?.map((b) =>
        b?._id === bookId
          ? { ...b, quantity: (Number(b?.quantity) || 1) + 1 }
          : b
      );
    } else {
      updatedWishlist = [...list, moveWish];
    }
    setList(updatedWishlist);

    toast.success("Book moved to Wishlist.", {
      autoClose: 3000, // 3 seconds
    });

    const autoRemoveCart = cart?.filter((book) => book._id !== bookId);
    setCart(autoRemoveCart);
    // toast("Book moved to wishlist.")
  }

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(list));
    console.log(list, "dfjkstoreu");
  }, [list]);

  // Quantity Function for Cart Page.

  // function quantityFunction({quantity, onIncrement, onDecrement}) {
  //   return (
  //     <span className="container ms-3">
  //       <i
  //         className="bi bi-plus-circle ms-5 ps-3"
  //         onClick={() => setCounter((quantity) => quantity + 1)
  //         }
  //       ></i>
  //       <span className="ms-2">{counter}</span>
  //       <i
  //         className="bi bi-dash-circle ms-2"
  //         // onClick={() => setCounter((count) => count - 1)} // earliar
  //         onClick={() => setCounter((quantity) => quantity - 1)}
  //       ></i>
  //     </span>
  //   );
  // }

  function QuantityFunction({ quantity, onIncrement, onDecrement }) {
    return (
      <span className="container ms-3">
        <div className="d-flex align-items-center gap-3 me-5">
          <p className="mb-0">Quantity</p>
          <i
            className="bi bi-dash-circle "
            // onClick={() => setCounter((count) => count - 1)} // earliar
            onClick={onDecrement}
          ></i>
          <span className="fs-5">{quantity}</span>
          <i className="bi bi-plus-circle " onClick={onIncrement}></i>
        </div>
      </span>
    );
  }

  // Functions to handle increment or decrement of a particular product in the cart.

  function incrementQuantity(bookId) {
    const increment = cart.map((item) =>
      item._id === bookId
        ? { ...item, quantity: Number(item.quantity) + 1 }
        : item
    );
    console.log(increment, "fkjfkd");
    setCart(increment);
  }

  function decrementQuantity(bookId) {
    const decrement = cart.map((item) =>
      item._id === bookId && item.quantity > 1
        ? { ...item, quantity: Number(item.quantity) - 1 }
        : item
    );
    setCart(decrement);
  }

  //Function to add card in a wishlist.
  function addToWishlist(_id) {
    const wishList = data?.find((book) => book._id === _id);
    setList([...list, wishList]);

    toast.success("Book added to Wishlist.", {
      autoClose: 3000, // 3 seconds
    });
  }

  function wishListRemoveHandler(_id) {
    const updateWishList = list?.filter((book) => book?._id !== _id);
    setList(updateWishList);
  }

  // function handleMoveCart(_id) {
  //   const moveCart = list?.find((book) => book._id === _id);
  //   console.log(moveCart, "ckljk")
  //   setCart([...cart, moveCart]);

  //   const autoRemoveList = list?.filter((book) => book._id !== _id);
  //   setList(autoRemoveList);
  // }

  function handleMoveCart(_id) {
    // const moveCart = list?.find((book) => book._id === _id);
    const moveCart = list?.find((book) => book._id === _id);
    const existingInCart = cart?.find((book) => book._id === _id);

    let updatedCart;

    if (existingInCart) {
      updatedCart = cart.map((book) =>
        book._id === _id
          ? { ...book, quantity: (Number(book.quantity) || 1) + 1 }
          : book
      );
    } else {
      updatedCart = [...cart, { ...moveCart, quantity: 1 }];
    }
    console.log(updatedCart, "ckljk");

    setCart(updatedCart);

    toast.success("Book moved to Cart.", {
      autoClose: 3000, // 3 seconds
    });

    const autoRemoveList = list?.filter((book) => book._id !== _id);
    setList(autoRemoveList);
  }

  // Function for Add to Wish List from book detail page.
  function handleAddToWish(_id) {
    const addToWish = books?.find((book) => book._id === _id);
    const existingWish = list?.find((b) => b._id === _id);

    let updateWishlist;
    if (existingWish) {
      updateWishlist = list?.map((b) =>
        b._id === _id ? { ...b, quantity: (Number(b.quantity) || 1) + 1 } : b
      );
    } else {
      updateWishlist = [...list, { ...addToWish, quantity: 1 }];
    }
    setList(updateWishlist);
    console.log(list, "checking list value");
    toast.success("Book added to Wishlist.", {
      autoClose: 3000, // 3 seconds
    });
  }

  //local storage..    Adding cart to local storage.

  // Function for Add to Cart from book detail page.
  function handleAddToCart(_id) {
    const addToCart = books?.find((book) => book._id === _id);
    console.log(addToCart, "djf");
    const existingCart = cart?.find((b) => b._id === _id);

    let updateCart;
    if (existingCart) {
      updateCart = cart?.map((b) =>
        b._id === _id ? { ...b, quantity: (Number(b.quantity) || 1) + 1 } : b
      );
    } else {
      updateCart = [...cart, { ...addToCart, quantity: 1 }];
    }
    setCart(updateCart);
    // console.log(cart, "checking cart value");

    toast.success("Book added to Cart.", {
      autoClose: 3000, // 3 seconds
    });
  }

  //Function addWish and addCart for more books which is below to book detail page.
  function handleAddWish(_id) {
    const addWish = books.find((book) => book._id === _id);
    setList([...list, addWish]);

    toast.success("Book added to Wishlist.", {
      autoClose: 3000, // 3 seconds
    });
  }

  function handleAddCart(_id) {
    const addCart = books.find((book) => book._id === _id);
    setCart([...cart, addCart]);

    toast.success("Book added to Cart.", {
      autoClose: 3000, // 3 seconds
    });
  }

  useEffect(() => {
    if (data && data.length > 0) {
      setDataTo(data);
    } else {
      data;
    }
  }, [data, dataTo]);
  console.log(dataTo, "checking dataTo oncontext");

  //Function for search bar.

  function searchBarHandler(value) {
    setSearchInput(value);
    console.log(searchInput, "frljkgd");
    // const filterData = allData.filter((item) => typeof item ==="string" && item.toLowerCase().includes(searchInput.toLowerCase()));
    const filterData = allData.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    // console.log(allData, "gkkdf")
    console.log(filterData, "fjlkdf");
    setBooks(filterData);
  }

  function parsePrice(price) {
    if (typeof price === "string") {
      price = price.replace(/[^0-9.-]+/g, "");
    }
    const parsed = Number(price);
    return isNaN(parsed) ? 0 : parsed;
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
    QuantityFunction,
    handleAddToWish,
    handleAddToCart,
    handleAddWish,
    handleAddCart,
    searchInput,
    incrementQuantity,
    decrementQuantity,
    saveData,
    setSaveData,
    parsePrice,
    searchBarHandler,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default useBookContext;
