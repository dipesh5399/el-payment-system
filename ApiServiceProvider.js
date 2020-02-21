export var addUsers = function(addUserDetails) {
  return fetch("http://localhost:3005/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
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
    },
    body: JSON.stringify({
      name: editUserDetails.name,
      contect: editUserDetails.contect,
      bankname: editUserDetails.bankname,
      cardnumber: editUserDetails.cardnumber
    })
  });
};
export var getUsers = function(
  searchParam,
  attrib,
  order,
  page,
  limit,
  isGetTotalCount
) {
  return fetch(
    searchParam
      ? `http://localhost:3005/users?q=${searchParam}&_sort=${attrib}&_order=${order}`
      : `http://localhost:3005/users?_sort=${
          attrib ? attrib : "name"
        }&_order=${order}&_page=${page ? page : 1}&_limit=${limit ? limit : 5}`,
    {
      headers: { X_Total_Count: getUsers.length }
    }
  ).then(response => {
    if (isGetTotalCount) {
      return response.json().then(items => {
        return {
          items,
          total: response.headers.get("X-Total-Count")
        };
      });
    }
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
