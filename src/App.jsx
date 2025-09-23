import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Category from "./assets/pages/Category";
import Books from "./assets/pages/Books";

import WishList from "./assets/pages/WishList";
import Cart from "./assets/pages/Cart";
import Profile from "./assets/pages/Profile";
import BookDetail from "./assets/pages/BookDetail";
import CheckOut from "./assets/pages/CheckOut";
import Order from "./assets/pages/Order";

function App() {
  //Checking local storage.
  //     if (typeof(Storage) !== "undefined") {
  //   console.log("localStorage is supported")
  // } else {
  //   console.log("localStorage is not supported")
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Category />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/books/:category" element={<Books />}></Route>
        <Route path="/wishList-page" element={<WishList />}></Route>
        <Route path="/cart-page" element={<Cart />}></Route>
        <Route path="/profile-page" element={<Profile />}></Route>
        <Route path="/book/:bookId" element={<BookDetail />}></Route>
        <Route path="/CheckOut-page" element={<CheckOut />}></Route>
        <Route path="/Order" element={<Order />}></Route>
      </Routes>
    </>
  );
}

export default App;
