import React from "react";

const Pagination = props => {
  var pagenumber = 0;
  return (
    <div>
      {props.items.map(i => {
        return (
          <button key={i} onClick={() => props.onPageChange(i, 2)}>
            {++pagenumber}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
