import React, { useState } from "react";
import Axios from "axios";
import './App.css';

function App() {

  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [picture, setPicture] = useState("");

  const createNew = async (e) => {
    e.preventDefault();

    const newItem = new FormData();
    newItem.append("vehicleImage", picture);
    newItem.append("year", year);
    newItem.append("make", make);
    newItem.append("model", model);
    newItem.append("price", price);
    newItem.append("sellerId", sellerId);


    try {
      if (picture && picture.size < 10000000) {
        await Axios.post(
          `http://localhost:3001/vehicles`,
          newItem
        ).then(async (response) => {
          return response;
        });
      } else {
        return alert("No image or image size to large");
      }
    } catch (error) {
      return console.log("Invetory item create new item api error");
    }
  };


  return (
    <div className="App">
      <form onSubmit={createNew} method="POST" >
        <label htmlFor="year">year</label>
        <input
          className=""
          type="text"
          name="year"
          value={year}
          onChange={(event) => {
            setYear(event.target.value)
          }}
        ></input>
        <label htmlFor="make">make</label>
        <input
          className=""
          type="text"
          name="make"
          value={make}
          onChange={(event) => {
            setMake(event.target.value)
          }}
        ></input>
        <label htmlFor="model">model</label>
        <input
          className=""
          type="text"
          name="model"
          value={model}
          onChange={(event) => {
            setModel(event.target.value)
          }}
        ></input>
        <label htmlFor="price">price</label>
        <input
          className=""
          type="text"
          name="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value)
          }}
        ></input>
        <label htmlFor="sellerId">sellerId</label>
        <input
          className=""
          type="text"
          name="sellerId"
          value={sellerId}
          onChange={(event) => {
            setSellerId(event.target.value)
          }}
        ></input>
        <label htmlFor="itemPicture">Item Picture</label>
        <input
          type="file"
          accept=".jpg"
          onChange={(Event) => {
            const file = Event.target.files[0];
            setPicture(file);
          }}
        />
        <button type="submit">
          submit
        </button>
      </form>

    </div>
  );
}

export default App;
