import Axios from "axios";
import './App.css';

function App() {

  const createNew = async (
    itemInfo,
    itemImage
  ) => {
    const newItem = await new FormData();
    newItem.append("itemName", itemInfo.itemName);
    newItem.append("itemImage", itemImage);
    try {
      if (itemImage && itemImage.size < 10000000) {
        await Axios.post(
          `http://localhost:3001//inventoryItems/createNew`,
          newItem
        ).then(async (response) => {
          return response;
        });
      } else {
        return alert("image size to large");
      }
    } catch (error) {
      return console.log("Invetory item create new item api error");
    }
  };


  return (
    <div className="App">
      <button onSubmit={createNew}>
        hello
      </button>
    </div>
  );
}

export default App;
