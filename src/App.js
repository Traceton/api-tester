import React, { useState } from "react";
import Axios from "axios";
import './App.css';

function App() {

  const [year, setYear] = useState("");

  const createNew = async (e) => {
    e.preventDefault();
    alert(year)
    // const newItem = await new FormData();
    // newItem.append("itemName", itemInfo.itemName);
    // newItem.append("itemImage", itemImage);
    // try {
    //   if (itemImage && itemImage.size < 10000000) {
    //     await Axios.post(
    //       `http://localhost:3001//inventoryItems/createNew`,
    //       newItem
    //     ).then(async (response) => {
    //       return response;
    //     });
    //   } else {
    //     return alert("image size to large");
    //   }
    // } catch (error) {
    //   return console.log("Invetory item create new item api error");
    // }
  };


  return (
    <div className="App">
      <form onSubmit={createNew} method="post">
        <label htmlFor="itemsInStock">itemsInStock</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="text"
          name="itemsInStock"
          value={year}
          onChange={(event) => {
            setYear(event.target.value)
          }}
        ></input>
        <button type="submit">
          submit
        </button>
      </form>

    </div>
  );
}

export default App;
