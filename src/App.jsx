
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Routes, Route} from 'react-router-dom'
// import Navbar from './assets/components/Navbar'
import Category from './assets/pages/Category'
import Books from './assets/pages/Books'

import { BookProvider } from './assets/contexts/BookContext'
import WishList from './assets/pages/WishList';
import Cart from './assets/pages/Cart';
import Login from './assets/pages/Login';

function App() {
 

  return (
    <>
    <BookProvider>
      <Routes>
      {/* <Route path="/" element={<Navbar />}></Route> */}
      <Route path="/" element={<Category/>}></Route>
      <Route path="/books" element={<Books />}></Route>
      <Route path="/wishList-page" element={<WishList />}></Route>
      <Route path="/cart-page" element={<Cart />}></Route>
      <Route path="/login-page" element={<Login />}></Route>
      


      </Routes>
    </BookProvider>
    </>
  )
}

export default App
