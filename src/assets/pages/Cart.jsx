import React from 'react'
import useBookContext from '../contexts/BookContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, loading, eroor } = useBookContext();
  console.log(cart)
  return (
    <>
      <h1>My Cart()</h1>
      <br/>
      <br/>
      <div>
        {cart && cart.length > 0 ? (
          <div className='container'>
          {cart && cart.map((car) => (
            <div key={car._id} className="card col-md-4 mb-5">
            <img src={car.image} alt={car.title} className="img-fluid" />
            <h5>{car.title}</h5>
            <h4>{car.price}</h4>
            <p>Quantity: </p>
            <button className="btn btn-primary">Remove From Cart</button>
            <button className="btn btn-primary">🩷 Add to Wishlist</button>
            </div>
          ))}
          </div>
        ) : (
          
          <div className="card col-md-5 mx-auto">
          <h3>Cart is empty!</h3>
          <img src="https://i.imghippo.com/files/sFg1101IhI.jpg" alt="Empty Cart" className='img-fluid'/>
          <Link to="/books">
          <button className="btn btn-primary">Shop Now</button>
          </Link>
          </div>
         

        )
        }
      </div>

    </>
  )
}

export default Cart