import React from "react";
import "./Tabular.css";
// import { data } from "./utils";

const Tabular = (props) => {
  return (
    <div>
      <table className="table">
        <tr className="tables">
          <th>Brand</th>
          <th>Model Name</th>
          <th>Color</th>
          <th>OS</th>
          <th>Rate</th>
        </tr>
        {props.tablesData.map(function (el) {
          return (
            <tr>
              <td>{el.brand}</td>
              <td>{el.modelName}</td>
              <td>{el.color}</td>
              <td>{el.os}</td>
              <td>{el.rate}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Tabular;
