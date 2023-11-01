import React, { useEffect } from "react";
import "./App.css";
import SideBar from "./components/sideBar";
import { List } from "./components/List";

export const Context = React.createContext();

function App() {
  const [links, setlinks] = React.useState([
    { id: 1, text: `To-Do 1`, show: true, showList: true },
  ]);
  const [currentList, setCurrentList] = React.useState(1);

  //this to switch which list is going to be rendered by generating a number where the button was clicked and save it in currentList
  const switchList = (index) => {
    setCurrentList(index);
  };
  //this when the user first open the

  return (
    <div className="To-do">
      <Context.Provider value={[links, setlinks]}>
        <div className="column1">
          <SideBar switchList={switchList} />
        </div>

        <div className="column2">
          <h3>my tasks</h3>

          {links.map((item) => {
            if (item.id === currentList && item.show === true) {
              return <List />;
            }
          })}
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
