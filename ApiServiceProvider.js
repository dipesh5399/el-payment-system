export var addUsersAPI = function(addUserDetails, getMethod) {
  return fetch(
    addUserDetails.id
      ? `http://localhost:3005/users/${addUserDetails.id}`
      : `http://localhost:3005/users`,
    {
      method: getMethod ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: addUserDetails.name,
        contect: addUserDetails.contect,
        bankname: addUserDetails.bankname,
        Email: addUserDetails.Email
      })
    }
  );
};

export var getUsersAPI = function(Param, isGetTotalCount) {
  return fetch(
    Param.search
      ? `http://localhost:3005/users?q=${Param.search}&_sort=${
          Param.sortBy
        }&_order=${Param.sortOrder}&_page=${
          Param.activePage ? Param.activePage : 1
        }&_limit=${Param.pageLimit ? Param.pageLimit : 5}`
      : `http://localhost:3005/users?_sort=${
          Param.sortBy ? Param.sortBy : "name"
        }&_order=${Param.sortOrder}&_page=${
          Param.activePage ? Param.activePage : 1
        }&_limit=${Param.pageLimit ? Param.pageLimit : 5}`,
    {
      headers: { X_Total_Count: getUsersAPI.length }
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

export var deleteUsersAPI = function(userobj) {
  return fetch(`http://localhost:3005/users/${userobj}`, {
    method: "DELETE"
  }).then(response => {
    return response.json();
  });
};

export var getUserByIDAPI = function(userid) {
  return fetch(`http://localhost:3005/users/${userid}`).then(response => {
    return response.json().then(items => {
      return {
        items
      };
    });
  });
};
