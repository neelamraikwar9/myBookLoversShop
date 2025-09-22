import React from "react";
import { useState, useEffect } from "react";
import useBookContext from "../contexts/BookContext";
import { Link } from 'react-router-dom';


const Profile = () => {

  const {addressFormHandler, handleInputOnChange, saveData, setSaveData, handleEdit, form, setForm, editAddressIndex} = useBookContext();


  useEffect(() => {
    const savedData = localStorage.getItem("formData");

    if(savedData){
      setForm(JSON.parse(savedData))
    }
  }, [])


  function handleDelete(name){
    console.log(name, "kjhdfkjdfs")
    const updateDelete = saveData.filter((user) => user.name != name)
    setSaveData(updateDelete)
    localStorage.setItem("formData", JSON.stringify(updateDelete))
  }

  
  return (
    <main>  
      <div className="container">
        <div className="col-md-12">
          <div className="card">
            <div className="d-flex justify-content-center">
              <i className="bi bi-person-bounding-box fa-8x"></i>
            </div>
            <div className="text-center py-5">
              <h4>Name: Sem</h4>
              <h4>Email: sem2025@gmail.com</h4>
              <h4>Mobile Number: 7685945323</h4>
            </div>
          </div>
        </div>

        <br />
        <br />


        <div className="card col-md-4 container py-3 text-center">
          <h3>Address Form</h3>
          <form onSubmit={addressFormHandler}>

            <label htmlFor="nam">
              Name:-
            </label>
            <input
              type="text"
              id="nam"
              className="ms-2"
              name="name"
              value={form.name || ""}
              required
              // onChange={(e) => setName(e.target.value)}
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="phn">
              Phone No:-
            </label>
            <input
              type="number"
              id="phn"
              className="ms-2"
              name="phoneNo"
              value={form.phoneNo || ""}
              required
              // onChange={(e) => setPhoneNo(e.target.value)}
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="add">Select Address:- </label>
            <select
              id="add"
              className="ms-2"
              name="selectedAddress"
              value={form.selectedAddress}
              required
              // onChange={(e) => setAddress(e.target.value)}
              onChange={handleInputOnChange}
            >
              {/* <option value="">Home</option> */}
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <br />

            <label htmlFor="con">Country:-</label>
            <input
              type="text"
              id="con"
              className="ms-2"
              name="country"
              value={form.country || ""}
              required
              // onChange={(event) => setCountry(event.target.value)}
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="stat">State:-</label>
            <input
              type="text"
              id="stat"
              className="ms-2"
              name="stateName"
              value={form.stateName || ""}
              required
              // onChange={(event) => setNameState(event.target.value)}
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="cit">City:-</label>
            <input
              type="text"
              id="cit"
              className="ms-2"
              name="city"
              value={form.city || " "}
              required
              // onChange={(event) => setCity(event.target.value)}
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="zip">Zip Code:-</label>
            <input
              type="text"
              id="zip"
              className="ms-2"
              name="zipCode"
              value={form.zipCode || ""}
              required
              // onChange={(event) => setZip(event.target.value)}
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="str">Street Address:-</label>
            <input
              type="text"
              id="str"
              className="ms-2"
              name="streetAddress"
              value={form.streetAddress || ""}
              required
              // onChange={(event) => setStreet(event.target.value)}
              onChange={handleInputOnChange}
            />
            <br />
            <br />
    
            <button type="submit" className="btn btn-primary">
             {/* {editAddressIndex === false ? 'Add Address' :  'Save Address'} */}
             {editAddressIndex ? 'Save Address' :  'Add Address' }
             {/* {editAddressIndex  !== null ? 'Save Address' :  'Add Address' } */}


            </button>
          </form>
        </div>
        <br />
        <br />

        <div className="d-flex justify-content-center">
          <div className="card col-md-8">
            <div className="card-header">
              <h3>Manage Address</h3>
            </div>
            
            <h5 className="container py-2">Address:-</h5>
            {saveData.length > 0 &&
              saveData?.map((user, index) => (
                <div key={index} className="container card col-md-8 mt-4 fs-6">
                <div className="container py-3">
                  <p>Name:- {user.name}</p>
                  <p>Phone No:- {user.phoneNo}</p>
                  <p>Selected Address:- {user.selectedAddress}</p>
                  <p>Country:- {user.country}</p>
                  <p>State:- {user.stateName}</p>
                  <p>City:- {user.city}</p>
                  <p>Zip Code:- {user.zipCode}</p>
                  <p>Street Address:- {user.streetAddress}</p>
                  <div className="d-flex d-grid gap-3">
                    <button type="button" onClick={() => handleEdit(index)} className="btn btn-outline-secondary"><i className="bi bi-pen-fill" ></i>Edit</button>
                    <button type="button" onClick={() => handleDelete(user.name)} className="btn btn-outline-danger" ><i className="bi bi-trash"></i>Delete</button>
                  </div>
                </div>
                 </div> 
              ))}
              <Link to="/CheckOut-page">
              <button className="btn btn-primary mt-5 w-100">Checkout</button>
              </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
