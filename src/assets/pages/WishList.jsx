import React from 'react'
import useBookContext from '../contexts/BookContext';
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';


const WishList = () => {
  const {list, wishListRemoveHandler, handleMoveCart} = useBookContext();
  console.log(list, "chicking list")
  return (
    <main className="container">
    <h1 className="text-center">My Wishlist</h1>
    <br/>
    {list && list.length > 0 ? (
      <div>
      <div className="row py-5">
        {
          list?.map((book) => 
          <div key={book._id} className='container col-md-4'>
          
         <div className="card h-100">
         <div className="container p-3">
         <img src={book.image} alt={book.name} className="img-fluid"/>
         </div>
         <div className="card-body text-center">
         <h5>{book.name}</h5>
         <h6>by {book.author}</h6>
         <h4>{book.salePrice}</h4>
         </div>
         <Link to="/cart-page">
         <button className="btn btn-outline-secondary display-block w-100 mb-2" onClick={() => handleMoveCart(book._id)}>Move to Cart  <i className="bi bi-cart4"></i></button>
         </Link>
         <button className="btn btn-secondary display-block w-100" onClick={() => wishListRemoveHandler(book._id)}>Remove from Wishlist   <i className="bi bi-suit-heart-fill ms-2"></i></button>
         </div>
         </div>
        
          )
        }
        </div>
      </div>
    ) : (
      <div className='container-fluid'>
          <div className="row justify-content-center">
          <div className="col-4">
          <div className="card ">
            <h3 className="text-center py-3">Wishlist is empty!</h3>
            <img
              src="https://i.imghippo.com/files/Mv9162SM.jpg"
              alt="Empty Cart"
              className="img-fluid"
            />
            <Link to="/books">
              <button className="btn btn-primary display-block w-100 ">Shop Now</button>
            </Link>
          </div>
          </div>
          </div>
          </div>
    )}
    </main>
    
  )
}

export default WishList

