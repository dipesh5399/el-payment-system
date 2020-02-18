import React from "react";

const NewUsers = props => {
  return (
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
  );
};

export default NewUsers;
