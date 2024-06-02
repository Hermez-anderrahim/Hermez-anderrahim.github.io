import React from "react";
import { ToDo } from "./To-Do-links";
import { Context } from "../App";
import "./sideBar.css";

const SideBar = (props) => {
  const [links, setlinks] = React.useContext(Context);
  const [countTODO, setCountTODO] = React.useState(0);

  function addLink() {
    setCountTODO(countTODO + 1);
    const newObj = {
      id: links.length + 1,
      text: `To-Do ${countTODO + 2}`,
      show: true,
      showList: false,
    };
    setlinks([...links, newObj]);
  }

  function deleteLink(id) {
    setCountTODO(countTODO - 1);
    console.log(countTODO);
    setlinks((item) => {
      return item.map((data) => {
        if (data.id === id) {
          return { ...data, show: !data.show };
        } else {
          return data;
        }
      });
    });
  }

  const showlinks = links.map((item) => {
    if (item.show == true) {
      return (
        <ToDo
          data={item}
          deleteLink={deleteLink}
          key={item.id}
          switch={props.switchList}
        />
      );
    }
  });

  return (
    <div className="sideBar">
      <h1 className="H1">To-Dos</h1>

      <button className="addLinkButton" onClick={addLink}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="50"
          viewBox="0 0 46 50"
          fill="none"
        >
          <path
            d="M20.1762 41.6667C20.1762 42.4955 20.4737 43.2903 21.0033 43.8764C21.5328 44.4624 22.2511 44.7917 23 44.7917C23.7489 44.7917 24.4672 44.4624 24.9967 43.8764C25.5263 43.2903 25.8238 42.4955 25.8238 41.6667V28.125H38.0602C38.8092 28.125 39.5274 27.7958 40.057 27.2097C40.5865 26.6237 40.884 25.8288 40.884 25C40.884 24.1712 40.5865 23.3764 40.057 22.7903C39.5274 22.2042 38.8092 21.875 38.0602 21.875H25.8238V8.33334C25.8238 7.50454 25.5263 6.70969 24.9967 6.12363C24.4672 5.53758 23.7489 5.20834 23 5.20834C22.2511 5.20834 21.5328 5.53758 21.0033 6.12363C20.4737 6.70969 20.1762 7.50454 20.1762 8.33334V21.875H7.93976C7.19084 21.875 6.4726 22.2042 5.94304 22.7903C5.41347 23.3764 5.11597 24.1712 5.11597 25C5.11597 25.8288 5.41347 26.6237 5.94304 27.2097C6.4726 27.7958 7.19084 28.125 7.93976 28.125H20.1762V41.6667Z"
            fill="white"
          />
        </svg>
      </button>

      <div className="separation-line"> </div>

      {showlinks}
    </div>
  );
};
export default SideBar;
