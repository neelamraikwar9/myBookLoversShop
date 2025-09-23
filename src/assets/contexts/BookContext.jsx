import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hook/useFetch";
// import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const BookContext = createContext();

const useBookContext = () => useContext(BookContext);

export function BookProvider({ children }) {
  // const {category} = useParams();
  // console.log(category, "kdjfjkchagkcjf")

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

  //Kept out from Profile page.
  const initial = {
    id: uuidv4(),
    name: "1",
    phoneNo: "333",
    selectedAddress: "fwe",
    country: "effe",
    stateName: "fefe",
    city: "efe232",
    zipCode: "222",
    streetAddress: "fwefw",
  };

  // const [addressData, setAddressData] = useState([initial]);
  const [form, setForm] = useState(initial);

  const formStorageData = localStorage.getItem("formData");
  console.log(formStorageData, "dkjfiuuyudjkl");

  // const [saveData, setSaveData] = useState(JSON.parse(formStorageData) || []);
  // console.log(saveData, "dkjfdjkl");

const [saveData, setSaveData] = useState(() => {
  const stored = localStorage.getItem("formData");
  return stored ? JSON.parse(stored) : [];
});





  //useStates for editing in checkout page;
  const [editAddressIndex, setEditAddressIndex] = useState();
  const [buttonLabel, setButtonLabel] = useState(false);

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
  };

  //local storage..    Adding cart to local storage.

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart, "dfjkstoreu");
  }, [cart]);

  //For changing from Add to cart  to go to cart.
  function buttonName() {
    {
      data?.map((book) => {
        const isInCart = cart?.some((car) => car._id === book._id);
        console.log(isInCart, "checkinart");
      });
    }
  }

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

  // Function for books if

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

  //local storage..    Adding cart to local storage.

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

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "kfd");
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // if (editAddressIndex) {
  //   console.log(form, "dfjklldkjf");
  //   setSaveData((prevformData) =>
  //     prevformData.map((address) => {

  //       if (address.index === editAddressIndex) {
  //         console.log(form, "dkf45")
  //         return { ...address};
  //       }
  //       return form;
  //     })
  //   );

  // function addressFormSubmitHandler(event) {
  //   event.preventDefault();
  //   console.log(form, "jyiouou898")

    // console.log(editAddressIndex, "kfdfkf")

    // if (editAddressIndex) {
    //   console.log(editAddressIndex, "kdjkjfd");
    //   setSaveData((prevData) =>
    //     prevData.map((address) => {
    //       console.log(address.id, "kflkjdf");
    //       console.log(editAddressIndex, "kfdkdf");
    //       if (address.id === editAddressIndex) {
    //         // return {...address, id: editAddressIndex}
    //         return { ...address, ...form };
    //       }
    //       return address;
    //     })
    //   );
    //   setEditAddressIndex();
    // }


    // console.log(saveData, "jkfkjfld898")

    const savedForm = form;
    // console.log(savedForm, "dkffljkd");


    console.log(saveData, "savekfkjfkjdfk");

      //   const id = form.id;
      //   const edited = saveData.map((item) => item.id === id ? {...item, ...form} : 
      //   {id:uuidv4(), ...form}
      // )
      // setSaveData((prev) => [...prev, ...edited])


      //moni did above code/...............................



  //     setSaveData((prev) => [...prev, {id:uuidv4(), ...form}])
  //   setSaveData([savedForm]);

  //   console.log(setSaveData, "fdkjkjfkfdfkj")


  //   const StringifyData = JSON.stringify([...saveData, savedForm]);
  //   // const StringifyData = JSON.stringify([savedForm]);

  //   console.log("checkingdata: ", StringifyData);
  //   localStorage.setItem("formData", StringifyData);
  //   console.log(form, "jyiouoyuiyoi")

    
  
  //   window.location.reload();
  // }

//   useEffect(() => {
//   localStorage.setItem("formData", JSON.stringify(saveData));
// }, [saveData])









// Here again trying submit and edit functionality.


//  function addressFormSubmitHandler(event) {
//     event.preventDefault();
//     console.log(form, "jyiouou898")

//     // console.log(editAddressIndex, "kfdfkf")

//     if (editAddressIndex) {
//       console.log(editAddressIndex, "kdjkjfd");
//       setSaveData((prevData) =>
//         prevData.map((address) => {
//           console.log(address.id, "kflkjdf");
//           console.log(editAddressIndex, "kfdkdf");
//           if (address.id === editAddressIndex) {
//             // return {...address, id: editAddressIndex}
//             return { ...address, ...form };
//           }
//           return address;
//         })
//       );
//       setEditAddressIndex();
//     }


//     // console.log(saveData, "jkfkjfld898")

//     const savedForm = form;
//     // console.log(savedForm, "dkffljkd");


//     console.log(saveData, "savekfkjfkjdfk");

//         const id = form.id;
//         console.log(id, "dfk")
//         const edited = saveData.map((item) => item.id === id ? {...item, ...form} : 
//         {id:uuidv4(), ...form}
//       )
//       setSaveData((prev) => [...prev, ...edited])


//       // did above code/...............................

//     setSaveData((prev) => [...prev, {id:uuidv4(), ...form}])
//     setSaveData([savedForm]);

//     console.log(setSaveData, "fdkjkjfkfdfkj")

//     const StringifyData = JSON.stringify([...saveData, savedForm]);
//     // const StringifyData = JSON.stringify([savedForm]);

//     console.log("checkingdata: ", StringifyData);
//     localStorage.setItem("formData", StringifyData);
//     console.log(form, "jyiouoyuiyoi")
  
//     window.location.reload();
//   }



  // const handleEdit = (index) => {
  //   setForm(saveData[index]); // load entyr data in the form.
  //   setEditAddressIndex(index);
  // };

  

  // const handleEdit = (id) => {
  //   setButtonLabel(true);
  //   console.log('dfoeifw',id)
  //   const selectedAddress = saveData.find((add) => add.id === id);
  //   console.log('selectedAddress', selectedAddress)

  //   setForm(selectedAddress); // load entyr data in the form.
  //   //  setForm({ phoneNo: selectedData.phoneNo })

  //   setEditAddressIndex(id);


  //   console.log(setEditAddressIndex, "edjitjitj");
  // };


  //  const handleEdit = (id) => {
  //   setButtonLabel(true);
  //   console.log('dfoeifw',id)
  //   const selectedAddress = saveData.find((add) => add.id === id);
  //   console.log('selectedAddress', selectedAddress)

  //   setForm(selectedAddress); // load entyr data in the form.
  //   //  setForm({ phoneNo: selectedData.phoneNo })

  //   setEditAddressIndex(id);

  //   console.log(setEditAddressIndex, "edjitjitj");
  // };



  const handleEdit = (phoneNo) => {
    setButtonLabel(true);
    console.log('dfoeifw',phoneNo)
    const selectedAddress = saveData.find((add) => add.phoneNo === phoneNo);
    console.log('selectedAddress', selectedAddress)

    setForm(selectedAddress); // load entyr data in the form.
    //  setForm({ phoneNo: selectedData.phoneNo })

    setEditAddressIndex(phoneNo);

    console.log(setEditAddressIndex, "edjitjitj");
  };



  function addressFormSubmitHandler(event) {
    event.preventDefault();
    console.log(form, "jyiouou898")

    // console.log(editAddressIndex, "kfdfkf")

    if (editAddressIndex) {
      console.log(editAddressIndex, "kdjkjfd");
      setSaveData((prevData) =>
        prevData.map((address) => {
          console.log(address.phoneNo, "kflkjdf");
          console.log(editAddressIndex, "kfdkdf");
          if (address.phoneNo === editAddressIndex) {
            return { ...address, ...form };
          } 
          // else{
          // return address;
          // }

          return address;

        })
      );
      
    }





      // const savedForm = form;
    // console.log(savedForm, "dkffljkd");

    // setSaveData((prev) => [...prev, savedForm]);
    console.log(saveData, "dflkjrry");

    // const addresses = JSON.parse(localStorage.getItem("formData")) || [];

//     addresses.push(newFormData);
// localStorage.setItem("formData", JSON.stringify(addresses));


//     console.log(saveData, "dflkj... ");
// setSaveData.push(form);

setSaveData(prev => [...prev, form]);

localStorage.setItem("formData", JSON.stringify([...saveData, form]));



    // const StringifyData = JSON.stringify([...saveData, savedForm]);
    // console.log("checkingdata: ", StringifyData);
    // localStorage.setItem("formData", StringifyData);


    window.location.reload();


    // console.log(saveData, "jkfkjfld898")
    // const savedForm = form;
    // console.log(savedForm, "dkffljkd");

    // console.log(saveData, "savekfkjfkjdfk");


    //     const id = form.id;
    //     console.log(id, "dfk")
    //     const edited = saveData.map((item) => item.id === id ? {...item, ...form} : 
    //     {id:uuidv4(), ...form}
    //   )
    //   setSaveData((prev) => [...prev, ...edited])


    //   //moni did above code/...............................

    // setSaveData((prev) => [...prev, {id:uuidv4(), ...form}])
    // setSaveData([savedForm]);

    // console.log(setSaveData, "fdkjkjfkfdfkj")

    // const StringifyData = JSON.stringify([...saveData, savedForm]);
    // // const StringifyData = JSON.stringify([savedForm]);

    // console.log("checkingdata: ", StringifyData);
    // localStorage.setItem("formData", StringifyData);
    // console.log(form, "jyiouoyuiyoi")
  
    // window.location.reload();
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
    searchBarHandler,
    searchInput,
    incrementQuantity,
    decrementQuantity,
    addressFormSubmitHandler,
    handleInputOnChange,
    saveData,
    setSaveData,
    form,
    setForm,
    parsePrice,
    handleEdit,
    setEditAddressIndex,
    buttonName,
    buttonLabel,
    setButtonLabel,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export default useBookContext;
