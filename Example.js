import React, { Component } from "react";
import data from "./data";
const newdata = data.emp;
export default class Example extends Component {
  state = {
    name: " Dipesh from example",
    fruits: ["Apple", "mango", "banana"]
  };
  render() {
    const newemparr = newdata.map((empobj, id) => {
      console.log(empobj.id, empobj.salary);
      return (
        <h5 key={id}>
          <li>
            ID: {empobj.id} SALARY: {empobj.salary}
          </li>
        </h5>
      );
    });
    const newarroffruits = this.state.fruits.map(fruitsobj => {
      return (
        <h5>
          <li>{fruitsobj}</li>
        </h5>
      );
    });
    return (
      <div>
        <h6>{this.state.name}</h6>
        <h5>
          <ul>{newarroffruits}</ul>
        </h5>
        <h3>data retrive from json file</h3>
        <h5>
          <ol start="1">{newemparr}</ol>
        </h5>
      </div>
    );
  }
}
