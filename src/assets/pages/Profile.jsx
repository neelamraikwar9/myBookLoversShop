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

  //useStates for editing in checkout page;
  const [editAddressIndex, setEditAddressIndex] = useState();
  const [buttonLabel, setButtonLabel] = useState(false);

  const [addressSelectedId, setAddressSelectedId] = useState(() => uuidv4());

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

    setForm(selectedAddress); // load entyr data in the form.

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
      //update existing address
      console.log(editAddressIndex, "kdjkjfd");
      setSaveData((prevData) =>
        prevData.map((address) =>
          address.id === editAddressIndex ? { ...address, ...form } : address
        )
      );
      setEditAddressIndex(null);
    } else {
      // Add new address with unique id
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

    setForm(initial); // Reset form after submit;
    setButtonLabel(false); //reset button.
  }

  const handleSelect = (addressObj) => {
    localStorage.setItem("selectedAddress", JSON.stringify(addressObj));
  };

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
          <form onSubmit={formSubmitHandler}>
            <label htmlFor="nam">Name:-</label>
            <input
              type="text"
              id="nam"
              className="ms-2"
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
              className="ms-2"
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
              className="ms-2"
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
              className="ms-2"
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
              className="ms-2"
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
              className="ms-2"
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
              className="ms-2"
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
              className="ms-2"
              name="streetAddress"
              value={form?.streetAddress || ""}
              required
              onChange={handleInputOnChange}
            />
            <br />
            <br />

            {console.log(buttonLabel, "dfjkjdfjk")}
            <button type="submit" className="btn btn-primary">
              {!buttonLabel ? "Add Address" : "Save Address"}
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
              saveData?.map((user, index) => {
                console.log(user, "hifuhiwuuiefu");
                return (
                  <div
                    key={index}
                    className="container card col-md-8 mt-4 fs-6"
                  >
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
                      <div className="container d-flex align-item-between gap-3">
                        <label>
                          <h5>Select {user.name}</h5>
                        </label>
                        <input
                          type="radio"
                          name="address"
                          checked={addressSelectedId === user.id}
                          value={user.id}
                          onChange={() => {
                            setAddressSelectedId(user.id);
                            handleSelect(user);
                          }}
                        />
                        {console.log(addressSelectedId, "dfsk")}
                      </div>
                    </div>
                  </div>
                );
              })}
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
