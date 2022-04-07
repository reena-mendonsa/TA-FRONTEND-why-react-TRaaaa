import React from "react";
import data from "../data/colors.json";

function Colors() {
  return (
    <div>
      {Object.keys(data).map((eachColor) => (
        <div key={eachColor}>
          <h2>{eachColor}</h2>
          <div className="flex">
            <Color some={data[eachColor]} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Color(props) {
  return (
    <React.Fragment>
      {props.some.map((color, i) => (
        <div className="flex flex-column">
          <div className="some" style={{ backgroundColor: color }}></div>
          <div>
            <span>{color}</span>
            <span class="number">{i === 0 ? 50 : i * 100}</span>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
export default Colors;
