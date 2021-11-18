import React, { useState } from "react";
import Axios from "axios";
import './App.css';

function App() {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");


  const createNew = async (e) => {
    e.preventDefault();

    const newItem = new FormData();
    newItem.append("title", title);
    newItem.append("backgroundImage", picture);

    const config = {
      headers: {
        Accept: 'application/json',
        'content-type': 'multipart/form-data'
      }
    }

    try {
      if (title && picture) {
        await Axios.post(
          `http://localhost:3001/posts`,
          newItem, config
        ).then(async (response) => {
          console.log(response)
          return response;
        });
      } else {
        return alert("No image or image size to large");
      }
    } catch (error) {
      return console.log(`create new item api error - ${error}`);
    }
  };


  return (
    <div className="App">
      <form onSubmit={createNew} method="POST" >

        <label htmlFor="setTitle">title</label>
        <input
          className=""
          type="text"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
        ></input>
        <br></br>
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
