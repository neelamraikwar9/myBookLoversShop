import React from "react";
import useBookContext from "../contexts/BookContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const CheckOut = () => {
  const { saveData, cart, parsePrice } = useBookContext();

  const totalItems = cart?.reduce(
    (acc, curr) => acc + Number(curr.quantity),
    0
  );
  console.log(totalItems, "fk");

  const subtotal = cart?.reduce(
    (acc, curr) => acc + parsePrice(curr.salePrice),
    0
  );
  console.log(subtotal, "fjdf");

  const discount = cart?.reduce(
    (acc, curr) => acc + (parsePrice(curr.salePrice) * 18) / 100,
    0
  );
  console.log(discount, "kjl");

  const totalAmount = cart?.reduce(
    (acc, curr) => acc + (parsePrice(curr.salePrice) - discount),
    0
  );
  console.log(totalAmount, "hgj");

  return (
    <main className="container">
      {/* when address is selected - take them to checkout page - which gives the order summary - when user clicks on checkout - display a message "Order places successfully" */}
      <h1>Checkout</h1>
      <br />

      <div className="container ">
        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-header">
                <h4>Selected Address</h4>
              </div>
              <div className="d-flex justify-content-end">
                <Link to="/profile-page">
                  <button type="button" className="btn btn-outline-info mt-3">
                    Manage Address
                  </button>
                </Link>
              </div>
              {saveData && saveData.length > 0 ? (
                saveData.map((user, index) => (
                  <div
                    key={index}
                    className="container card col-md-10 py-3 mt-3 mb-3"
                  >
                    <p>
                      <strong>Name:- </strong>
                      {user.name}
                    </p>
                    <p>
                      <strong>Phone No:- </strong>
                      {user.phoneNo}
                    </p>
                    <p>
                      <strong>Selected Address:- </strong>
                      {user.selectedAddress}
                    </p>
                    <p>
                      <strong>Country:- </strong>
                      {user.country}
                    </p>
                    <p>
                      <strong>State:- </strong>
                      {user.stateName}
                    </p>
                    <p>
                      <strong>City:- </strong>
                      {user.city}
                    </p>
                    <p>
                      <strong>Zip Code:- </strong>
                      {user.zipCode}
                    </p>
                    <p>
                      <strong>Street Address:- </strong>
                      {user.streetAddress}
                    </p>
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <div className="col-md-5">
            <div className="card">
              <div className="card-header">
                <h3>Order Summary</h3>
              </div>
              <div className="card-body">
                <p className="d-flex justify-content-between">
                  Subtotal({totalItems}): <span>₹{subtotal}</span>
                </p>
                <p className="d-flex justify-content-between">
                  Delivery: <span className="text-success">Free</span>
                </p>
                <p className="d-flex justify-content-between">
                  Tax(18%): <span>₹{discount}</span>
                </p>
                <hr />
                <h5 className="d-flex justify-content-between">
                  Total: <span>₹{totalAmount}</span>
                </h5>
              </div>
              <Link to="/order">
                <button className="btn btn-primary w-100">Place Order</button>
              </Link>
            </div>
          </div>

          {/* <div className="container"> */}
          <div className="col-md-12 mt-5">
            <div className="card">
              <div className="card-header">
                <h4>Total Ordered Items({cart?.length})</h4>
                {console.log(cart, "jfkljkfg")}
              </div>
              {cart && cart.length > 0 ? (
                cart.map((item, index) => (
                  <div key={index} className="card mb-3 mt-3 py-3 me-5 ms-5">
                    <div className="row g-0">
                      <div className="col-md-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid border border-warning mt-3 mb-2"
                        />
                      </div>
                      <div className="col-md-10 container py-5 p-5 d-flex">
                        <h5 className="card-title py-3">
                          <i>
                            {item.name} by {item.author}
                          </i>
                        </h5>
                        <h4 className="card-text py-3 ms-5 p">
                          {item.salePrice}
                        </h4>
                        <h5 className="py-3 ms-5">
                          {" "}
                          Quantity: {item.quantity}
                        </h5>
                        <br />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
