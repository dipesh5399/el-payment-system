import React from "react";
import Search from "../images/Search.png";
import cancle from "../images/cancle.png";
import Images from "react-bootstrap/Image";
import "../cssfiles/SearchAndPagiAndAddUser.css";
const SearchInput = props => {
  var pagenumber = 0;
  return (
    <React.Fragment>
      {/* input field for search */}{" "}
      <div id="searchArea">
        <span>
          <Images
            src={Search}
            alt="Search"
            height="30px"
            width="20px"
            style={{ paddingTop: "5px", marginLeft: "10px" }}
          ></Images>
        </span>
        {"  "}
        <span>
          {" "}
          <input
            placeholder="Search"
            type="text"
            value={props.searchKey}
            onChange={props.onChange}
            name="search"
            id="search"
            style={{ marginLeft: "10px" }}
          ></input>
        </span>
        {console.log(props.limit)}
        <span>
          <img
            src={cancle}
            alt="Clear search"
            height="25px"
            width="20px"
            onClick={props.onClear}
            style={{ paddingTop: "5px", marginLeft: "150px" }}
          ></img>
        </span>
      </div>
      {/* button for add new user */}
      <button onClick={props.onAddUserClick} id="addbtn">
        Request New Card
      </button>
      {/* set page and page limit */}
      <div align="center" id="pagination">
        {" "}
        <select
          id="selectrange"
          name="pageLimit"
          value={props.limit}
          onChange={props.onChange}
        >
          <option>5</option>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        {props.items.map((i = 0) => {
          return (
            console.log(props.limit),
            (
              <button
                key={i}
                onClick={() => props.onPageChange(i, props.limit)}
                style={{
                  backgroundColor: `${
                    props.activePage === i ? " rgb(224, 222, 243)" : ""
                  }`
                }}
              >
                {++pagenumber}
              </button>
            )
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default SearchInput;
