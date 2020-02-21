import React from "react";

const Pagination = props => {
  var pagenumber = 0;

  return (
    <div
      align="center"
      style={{
        height: "30px",
        witdh: "150px",
        position: "absolute",
        borderRadius: "10px",
        right: "200px",
        color: "white"
      }}
    >
      {" "}
      <select style={{ borderRadius: "5px", width: "50px" }}>
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
  );
};
export default Pagination;
