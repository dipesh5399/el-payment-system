import React from "react";
import "../cssfiles/SearchAndPagiAndAddUser.css";
const SearchInput = props => {
  var pagenumber = 0;

  return (
    <React.Fragment>
      {/* input field for search */}
      <input
        placeholder="search"
        type="text"
        value={props.searchKey}
        onChange={props.onChange}
        id="search"
      ></input>
  {/* button for add new user */ }
      <button
      onClick={props.onAddUserClick}
      style={{
        height: "30px",
        witdh: "150px",
        position: "absolute",
        borderRadius: "10px",
        right: "20px",
        backgroundColor: "blue",
        color: "white"
      }}
    >
      Add New User
    </button>
    {/* set page and page limit */}
    <div
      align="center"
      id="pagination"
    >
      {" "}
      <select id="selectrange">
        <option>5</option>
        <option>10</option>
        <option>20</option>
        <option>50</option>
      </select>
      {props.items.map((i = 0) => {
        return (
          <button
            key={i}
            onClick={() => props.onPageChange(i, 5)}
            style={{
              backgroundColor: `${props.activePage === i ? "aqua" : ""}`
            }}
          >
            {++pagenumber}
          </button>
        );
      })}
    </div>
    </React.Fragment>
  );
};
export default SearchInput;
