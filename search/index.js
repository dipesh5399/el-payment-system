import React from "react";

import * as Bootstrap from "react-bootstrap";


import { FormControl } from "react-bootstrap";

const SearchInput = props => {
  return (
    <React.Fragment>
      <Bootstrap.Container>
        <Bootstrap.Row>
          <Bootstrap.Col xs="3">
          <h3 style={{ color: "black" }}>Contact Vault</h3>
          </Bootstrap.Col>
          <Bootstrap.Col></Bootstrap.Col>
          <Bootstrap.Col xs="15">
            {" "}
            <Bootstrap.Button
              onClick={props.onAddUserClick}
              size="sm"
              variant="secondary"
            >
              Request New Card
            </Bootstrap.Button>
            
          </Bootstrap.Col>
        </Bootstrap.Row>
        <hr/>
        <Bootstrap.Row>
          <Bootstrap.Col ><Bootstrap.InputGroup>
              <div class="input-group mb-3">               
                <FormControl
                  placeholder="Search"
                  type="search"
                  value={props.searchKey}
                  onChange={props.onChange}
                  name="search"
                  required
                ></FormControl>
                <div class="input-group-append"></div>
              </div>
            </Bootstrap.InputGroup></Bootstrap.Col>
          <Bootstrap.Col></Bootstrap.Col>
          <Bootstrap.Col>
            <div class="datatables_info">
              <span>
                Showing:
                <select
                  class="custom-select custom-select-sm "
                 style={{width:"40%"}}
                  as="select"
                  size="sm"
                  name="pageLimit"
                  value={props.limit}
                  onChange={props.onChange}
                >
                  <option class="dropdown-item">5</option>
                  <option class="dropdown-item">10</option>
                  <option class="dropdown-item">20</option>
                  <option class="dropdown-item">50</option>
                </select>{" "}
              </span>
              Entries
            </div>
          </Bootstrap.Col>
          <Bootstrap.Col xs="4">
            {" "}
            <nav aria-label="...">
              <ul class="pagination">
                <Bootstrap.Col xs="3">
                  {props.activePage !== 1 && (
                    <li
                      class="page-item"
                      onClick={() =>
                        props.onPageChange(props.activePage - 1, props.limit)
                      }
                    >
                      <a class="page-link" href="#">
                        Prev.
                      </a>
                    </li>
                  )}
                </Bootstrap.Col>
                <li class="page-item">
                  <h5 class="form-control ">
                    {props.activePage} of {props.items.length}
                  </h5>
                </li>
                <Bootstrap.Col xs="3">
                  {" "}
                  {props.activePage < props.items.length && (
                    <li
                      class="page-item "
                      onClick={() =>
                        props.onPageChange(props.activePage + 1, props.limit)
                      }
                    >
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  )}
                </Bootstrap.Col>
              </ul>
            </nav>
          </Bootstrap.Col>
        </Bootstrap.Row>
      </Bootstrap.Container>
    </React.Fragment>
  );
};
export default SearchInput;
// {props.items.map((i = 0) => {
//   return (
//     console.log(props.limit),
//     (
//       <button
//         key={i}
//         onClick={() => props.onPageChange(i, props.limit)}
//         style={{
//           backgroundColor: `${
//             props.activePage === i ? " rgb(224, 222, 243)" : ""
//           }`
//         }}
//       >
//         {++pagenumber}
//       </button>
//     )
//   );
// })}
