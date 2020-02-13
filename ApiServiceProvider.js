// import React, { Component } from "react";

// export default class ApiServiceProvider extends Component {
//   getUsers = searchParam => {
//     return fetch(
//       searchParam
//         ? `http://localhost:3005/users?q=${searchParam}`
//         : "http://localhost:3005/users"
//     ).then(response => {
//       return response.json();
//     });
//   };
//   deleteUsers = userobj => {
//     return fetch(`http://localhost:3005/users/${userobj}`, {
//       method: "DELETE"
//     }).then(response => {
//       return response.json();
//     });
//   };
//   render() {
//     return <div></div>;
//   }
// }
export var addUsers = function(addUserDetails) {
  return fetch("http://localhost:3005/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      name: addUserDetails.name,
      contect: addUserDetails.contect,
      bankname: addUserDetails.bankname,
      cardnumber: addUserDetails.cardnumber
    })
  });
};
export var getUsers = function(searchParam) {
  return fetch(
    searchParam
      ? `http://localhost:3005/users?q=${searchParam}`
      : "http://localhost:3005/users"
  ).then(response => {
    return response.json();
  });
};
export var deleteUsers = function(userobj) {
  return fetch(`http://localhost:3005/users/${userobj}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  });
};
// export default ApiServiceProvider;
