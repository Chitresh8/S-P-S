import "./App.css";
import React, { useState } from "react";
import { data } from "./utils";
import Tabular from "./Tabular";

const App = () => {
  const [tableData, setTableData] = useState(data);
  const [property, setProperty] = useState("");

  const inputClickHandler = (event) => {
    setProperty(event.target.value);
  };
  const searchClickHandler = (event) => {
    const mobiles = data.filter(function (el) {
      return el.brand === property;
    });
    console.log(mobiles);
    setTableData(mobiles);
  };

  const resetClickHandler = (event) => {
    setProperty("");
    setTableData(data);
  };

  return (
    <div>
      <header class="header">SmartPhones and it's Spec's </header>
      <p>Tabular column for Mobile Specifications</p>
      <div className="Input">
        <input
          type="text"
          name="Input"
          value={property}
          onChange={inputClickHandler}
        />

        <button onClick={searchClickHandler}>Search</button>
        <button onClick={resetClickHandler}>Reset</button>
        <Tabular tablesData={tableData} />
      </div>
      <footer>Powered by SAW</footer>
    </div>
  );
};
export default App;
