import React from "react";

const SearchInput = props => {
  return (
    <div>
      <input
        placeholder="search"
        type="text"
        value={props.searchKey}
        onChange={props.onChange}
        style={{
          height: "20px",
          witdh: "150px",
          position: "absolute",
          left: "20px"
        }}
      ></input>
    </div>
  );
};
export default SearchInput;
