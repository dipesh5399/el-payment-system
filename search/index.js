import React from "react";

import * as Bootstrap from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";

import { FormControl } from "react-bootstrap";

const SearchInput = props => {
  return (
    <React.Fragment>
      <Bootstrap.Container>
        <Bootstrap.Row>
          <Bootstrap.Col xs="3">
            <Bootstrap.InputGroup>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="btn btn-outline-info">
                    <Bootstrap.InputGroup.Prepend>
                      <Icons.Search></Icons.Search>
                    </Bootstrap.InputGroup.Prepend>
                  </span>
                </div>
                <FormControl
                
                  placeholder="Search"
                  type="text"
                  value={props.searchKey}
                  onChange={props.onChange}
                  name="search"
                  required
                ></FormControl>
                <div class="input-group-append">
                  <span  class="btn btn-outline-info">
                    <Icons.XCircle 
                      alt="Clear search"
                      onClick={props.onClear}
                    ></Icons.XCircle>
                  </span>
                </div>
              </div>
            </Bootstrap.InputGroup>
          </Bootstrap.Col>
        </Bootstrap.Row>
        <Bootstrap.Row>
          <Bootstrap.Col></Bootstrap.Col>
          <Bootstrap.Col></Bootstrap.Col>
          <Bootstrap.Col xs="4">
            <div>
              <span></span>
              {""}
              <span>
                <select
                  class="badge badge-primary"
                  as="select"
                  name="pageLimit"
                 
                  value={props.limit}
                  onChange={props.onChange}
                >
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
                {props.activePage !== 1 && (
                  <Bootstrap.Button variant="info" size="sm">
                    <Icons.ChevronCompactLeft
                      style={{ display: "initial" }}
                      onClick={() =>
                        props.onPageChange(props.activePage - 1, props.limit)
                      }
                    ></Icons.ChevronCompactLeft>
                  </Bootstrap.Button>
                )}{" "}
                <Bootstrap.FormLabel
                  class="btn btn-outline-light"
                  style={{ display: "initial", color: "black" }}
                >
                  {props.activePage} of {props.items.length}
                </Bootstrap.FormLabel>{" "}
                {props.activePage < props.items.length && (
                  <Bootstrap.Button variant="info" size="sm">
                    <Icons.ChevronCompactRight
                      style={{ display: "initial" }}
                      onClick={() =>
                        props.onPageChange(props.activePage + 1, props.limit)
                      }
                    ></Icons.ChevronCompactRight>
                  </Bootstrap.Button>
                )}{" "}
                <Bootstrap.Button onClick={props.onAddUserClick} size="sm">
                  Request New Card
                </Bootstrap.Button>
              </span>
            </div>
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
