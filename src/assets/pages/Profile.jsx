import { useState, useEffect } from "react";
import useBookContext from "../contexts/BookContext";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";

const Profile = () => {
  const inputRef = useRef(null);

  const { saveData, setSaveData } = useBookContext();

  const initial = {
    id: uuidv4(),
    name: "",
    phoneNo: "",
    selectedAddress: "",
    country: "",
    stateName: "",
    city: "",
    zipCode: "",
    streetAddress: "",
  };

  const [form, setForm] = useState(initial);

  const formStorageData = localStorage.getItem("formData");
  console.log(formStorageData, "dkjfiuuyudjkl");

  const [editAddressIndex, setEditAddressIndex] = useState();
  const [buttonLabel, setButtonLabel] = useState(false);

  console.log(form, "checkinform");
  console.log(saveData, "dright");

  useEffect(() => {
    const savedData = localStorage.getItem("formData");

    if (savedData) {
      setForm(JSON.parse(savedData));
    }
  }, []);

  function handleDelete(name) {
    console.log(name, "kjhdfkjdfs");
    const updateDelete = saveData.filter((user) => user.name != name);
    setSaveData(updateDelete);
    localStorage.setItem("formData", JSON.stringify(updateDelete));
  }
  console.log(saveData, "dflkj ");

  const handleEdit = (id) => {
    inputRef.current?.focus();
    setButtonLabel(true);
    console.log("dfoeifw", id);
    const selectedAddress = saveData.find((add) => add.id === id);
    console.log("selectedAddress", selectedAddress);

    setForm(selectedAddress);

    setEditAddressIndex(id);

    console.log(setEditAddressIndex, "edjitjitj");
  };

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "kfd");
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  function formSubmitHandler(event) {
    event.preventDefault();

    console.log(form, "jyiouou898");

    if (editAddressIndex) {
      console.log(editAddressIndex, "kdjkjfd");
      setSaveData((prevData) =>
        prevData.map((address) =>
          address.id === editAddressIndex ? { ...address, ...form } : address
        )
      );
      setEditAddressIndex(null);
    } else {
      setSaveData((prev) => [...prev, { ...form, id: uuidv4() }]);
    }

    localStorage.setItem(
      "formData",
      JSON.stringify(
        editAddressIndex
          ? saveData.map((address) =>
              address.id === editAddressIndex
                ? { ...address, ...form }
                : address
            )
          : [...saveData, { ...form, id: uuidv4() }]
      )
    );

    setForm(initial);
    setButtonLabel(false);
  }

  function handleSelectAddress(userData) {
    console.log(userData, "ckljcjklkljcjlkc");

    localStorage.setItem("selectedAddress", JSON.stringify(userData));
  }

  return (
    <main>
      <div className="container">
        <div className="col-md-12">
          <div className="card">
            <div className="d-flex justify-content-center">
              <i className="bi bi-person-bounding-box fa-3x"></i>
            </div>
            <div className="text-center py-5">
              <p>
                <strong>Name:</strong> Sem
              </p>
              <p>
                <strong>Email:</strong> sem2025@gmail.com
              </p>
              <p>
                <strong>Mobile Number:</strong>7685945323
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h2>Please add address to continue</h2>
        <br />
        <br />

        <div className="card col-md-3 container py-3">
          <h3 className="text-center">Address Form</h3>
          <form onSubmit={formSubmitHandler}>
            <label htmlFor="nam">Name:-</label>
            <input
              type="text"
              id="nam"
              className="form-control"
              name="name"
              value={form?.name || ""}
              required
              onChange={handleInputOnChange}
              ref={inputRef}
            />
            <br />
            <br />

            <label htmlFor="phn">Phone No:-</label>
            <input
              type="number"
              id="phn"
              className="form-control"
              name="phoneNo"
              value={form?.phoneNo || ""}
              required
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="add">Select Address:- </label>
            <select
              id="add"
              className="form-select"
              name="selectedAddress"
              value={form?.selectedAddress}
              required
              onChange={handleInputOnChange}
            >
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
              className="form-control"
              name="country"
              value={form?.country || ""}
              required
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="stat">State:-</label>
            <input
              type="text"
              id="stat"
              className="form-control"
              name="stateName"
              value={form?.stateName || ""}
              required
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="cit">City:-</label>
            <input
              type="text"
              id="cit"
              className="form-control"
              name="city"
              value={form?.city || " "}
              required
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="zip">Zip Code:-</label>
            <input
              type="text"
              id="zip"
              className="form-control"
              name="zipCode"
              value={form?.zipCode || ""}
              required
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <label htmlFor="str">Street Address:-</label>
            <input
              type="text"
              id="str"
              className="form-control"
              name="streetAddress"
              value={form?.streetAddress || ""}
              required
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                {!buttonLabel ? "Add Address" : "Save Address"}
              </button>
            </div>
          </form>
        </div>
        <br />
        <br />

        <div className="d-flex justify-content-center">
          <div className="card col-md-8 w-100">
            <div className="card-header">
              <h3>Manage Address</h3>
            </div>

            <h5 className="container py-2">Address:-</h5>
            {saveData.length > 0 &&
              saveData?.map((user, index) => {
                return (
                  <div key={index} className="card col-md-5 mt-4 fs-6 ms-3">
                    <div className="ms-3 py-3">
                      <p>Name:- {user.name}</p>
                      <p>Phone No:- {user.phoneNo}</p>
                      <p>Selected Address:- {user.selectedAddress}</p>
                      <p>Country:- {user.country}</p>
                      <p>State:- {user.stateName}</p>
                      <p>City:- {user.city}</p>
                      <p>Zip Code:- {user.zipCode}</p>
                      <p>Street Address:- {user.streetAddress}</p>
                      <div className="d-flex d-grid gap-3">
                        <button
                          type="button"
                          onClick={() => handleEdit(user?.id)}
                          className="btn btn-outline-secondary"
                        >
                          <i className="bi bi-pen-fill"></i>Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(user.name)}
                          className="btn btn-outline-danger"
                        >
                          <i className="bi bi-trash"></i>Delete
                        </button>
                      </div>
                      <br />
                      <div className="d-flex align-item-between gap-3">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleSelectAddress(user)}
                        >
                          Select Address
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="d-flex justify-content-center">
              <Link to="/CheckOut-page">
                <button className="btn btn-primary mt-5 mb-3 px-auto py-auto">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
