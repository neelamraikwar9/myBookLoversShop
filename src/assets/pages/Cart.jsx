import React from "react";
import useBookContext from "../contexts/BookContext";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Cart = () => {
  const { cart, cartRemoveHandler, handleMoveWishlist} = useBookContext();
  console.log(cart, "cart checking on cart page....");

  // const [amount, setAmount] = useState(1);


  // const setDecrease = () => {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  //  const setIncrease = () => {
    
  // }


//  const increaseQuty = () => {
//   const count = document.querySelector('.count')

//   if(count.valueAsNumber >= faProduct)
  
//  }


//  const decreaseQuty = () => {

//  }


  return (
    <main className="container">
      <h1 className="text-center">My Cart()</h1>
      <br />
      <br />
      <div className="container">
        {cart && cart.length === 0 ? (
          <div className='container-fluid'>
          <div className="container row justify-content-center text-align-center">
          <div className="col-md-4"> 
          <div className="card ">
            <h3 className="text-center py-3">Cart is empty!</h3>
            <img
              src="https://i.imghippo.com/files/sFg1101IhI.jpg"
              alt="Empty Cart"
              className="img-fluid"
            />
            <Link to="/books">
              <button className="btn btn-primary display-block w-100 ">Shop Now </button>
            </Link>
          </div>
          </div>
          </div>
          </div>
        ) : (
          <div className="container my-4 bg-dark ">
          
          <div className="row justify-content-center ms-lg-5 ps-lg-5">
           <div className="col-md-8">

            <div className="card text-center mb-3">        
            {/* style={{ width: "20rem" }} */}
              <div className="card-body ">
                <h5 className="card-title">PRICE DETAILS</h5>
                <hr/>
                  <div className="container">
                  {cart && cart.length > 0 ? (
                    <div>
                  <p className="card-text">Price() {cart?.price}</p>
                  <p>Discount - {cart?.discountPrice}</p>
                  <p>Delivery Charges {cart?.deliveryCharges}</p>
                  <h4>Total Amount {cart?.price - cart?.discountPrice}</h4>
                  <p>You will save {cart?.discount} on this order</p>
                  </div>
                  ): (
                    <p>Price Details is not found.</p>
                  )}
                 
                  </div>
              </div>
            </div>
            </div>
            </div>

            <div className="container">
              {cart &&
                cart?.map((car) => (
                  <div
                    key={car._id}
                    className="card mt-2"
                    style={{ maxWidth: "450px" }}
                  >
                    <div className="row">
                      <div className="col-md-6 mt-5">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="img-fluid rounded-start"
                        />
                      </div>
                      <div className="container col-md-6">
                        <div className="card-body mt-3">
                          <h5>{car.name}</h5>
                          <h6>by {car.author}</h6>
                          <p><strong className="fw-medium">{car.salePrice}</strong> <del><span className="text-success">{car.price}</span></del></p>
                          <p className="text-success">{car.discount}</p>

                          <p>Quantity: </p>

                          {/* <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/> */}

                          {/* <div className="stockCounter d-inline">
                            <span className="btn btn-danger minus" onClick={decreaseQuty}>-</span>
                            <input type="number" className="form control count d-inline" value="1" readOnly/>
                            <span className="btn btn-danger minus" onClick={increaseQuty}>+</span>
                          </div> */}



                          <div className="container">
                           <Link to="/wishList-page">
                          <button className="btn btn-outline-secondary ms-lg-1 ms-md-5 ms-sm-5" onClick={() => handleMoveWishlist(car._id)}>
                            {" "}
                            Move to Wishlist <i className="bi bi-suit-heart-fill ms-2"></i>
                          </button>
                          </Link>

                          <button
                            className="btn btn-secondary mb-3 ms-lg-1 ms-sm-5"
                            onClick={() => cartRemoveHandler(car._id)}
                          >
                            Remove From Cart   <i className="bi bi-cart4"></i>
                          </button>
                          </div>
                        </div>   
                        </div>   
                    </div>  
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
