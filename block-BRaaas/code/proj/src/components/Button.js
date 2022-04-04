import React from "react";
import data from "../data/data";

function handleChange() {
  alert("Hello React Event");
}

function handleChangeTwo() {
  alert("To learn React use https://reactjs.org");
  alert("React and ReactDOM works together");
  alert("Babel helps in writing JSX");
}

function Buttons() {
  return (
    <React.Fragment>
      <Button />
      {data.map((elm) => (
        <Fruits key={elm.id} {...elm} />
      ))}
    </React.Fragment>
  );
}

function Fruits(props) {
  return (
    <React.Fragment>
      <button onClick={() => alert(`${props.value}`)}>{props.value}</button>
    </React.Fragment>
  );
}

function Button() {
  let names = ["Arya", "John", "Bran"];
  return (
    <React.Fragment>
      <button onClick={handleChange}>Click Me</button>
      <button onClick={handleChangeTwo}>How can I help you?</button>
      {names.map((name) => {
        return (
          <button key={name} onClick={() => alert(`Hello ${name}`)}>
            {name}
          </button>
        );
      })}
    </React.Fragment>
  );
}

export default Buttons;
