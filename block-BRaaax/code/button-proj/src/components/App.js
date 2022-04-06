import { buttonSizes, buttonTypes } from "./Button";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Button label="Click Me" />
      <Button
        size={buttonSizes.SMALL}
        label="Click Me"
        type={buttonTypes.SECONDARY}
      />
      <Button
        size={buttonSizes.MEDIUM}
        label="Click Me"
        type={buttonTypes.TERTIARY}
        onClickHandler={() => alert("You Clicked Me!")}
      />
      <Button disabled />
    </React.Fragment>
  );
}
function Button(props) {
  function getStyles() {
    let { type = buttonTypes.PRIMARY, size = buttonSizes.MEDIUM } = props;
    return `button button--${type} button--${size}`;
  }
  return (
    <React.Fragment>
      <button
        onClick={props.onClickHandler}
        className={getStyles()}
        disabled={props.disabled}
      >
        {props.label || "Button"}
      </button>
    </React.Fragment>
  );
}

export default App;
