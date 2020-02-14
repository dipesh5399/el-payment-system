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
export var editUsers = function(editUserDetails) {
  return fetch(`http://localhost:3005/users/${editUserDetails.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      name: editUserDetails.name,
      contect: editUserDetails.contect,
      bankname: editUserDetails.bankname,
      cardnumber: editUserDetails.cardnumber
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
