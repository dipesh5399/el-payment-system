import React from "react";

import * as Bootstrap from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { FormControl } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const SearchInput = props => {
  return (
    <React.Fragment>
      <Bootstrap.Container>
        <Bootstrap.Row>
          <Bootstrap.Col xs="15">
            <h3 >Contact Vault</h3>
          </Bootstrap.Col>
          <Bootstrap.Col></Bootstrap.Col>
          <Bootstrap.Col xs="15">
            <Bootstrap.Button
              onClick={props.onAddUserClick}
              variant="secondary"
            >
              Request New Card
            </Bootstrap.Button>
          </Bootstrap.Col>
        </Bootstrap.Row>
        <hr />
        <Bootstrap.Row>
          <Bootstrap.Col xs="15">
            <Bootstrap.InputGroup>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    {" "}
                    <Icons.Search></Icons.Search>
                  </span>
                </div>
                <FormControl
                  placeholder="Search"
                  type="search"
                  value={props.searchKey}
                  onChange={props.onChange}
                  name="search"
                ></FormControl>
              </div>
            </Bootstrap.InputGroup>
          </Bootstrap.Col>
          <Bootstrap.Col></Bootstrap.Col>
          <Bootstrap.Col xs="15">
            <div class="dropdown-select">
              <span>
                Showing :
                <Dropdown
                  onSelect={(ekey, e) =>
                    props.onChange({
                      target: {
                        value: e.currentTarget.innerText,
                        name: "pageLimit"
                      }
                    })
                  }
                >
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {props.limit}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>5</Dropdown.Item>
                    <Dropdown.Item>10</Dropdown.Item>
                    <Dropdown.Item>15</Dropdown.Item>
                    <Dropdown.Item>20</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
              </span>
            </div>
          </Bootstrap.Col>
          <Bootstrap.Col xs="15">
            <nav aria-label="...">
              <ul class="pagination">
                <Bootstrap.Col>
                  {
                    <li
                      class={
                        props.activePage !== 1
                          ? "page-item"
                          : "page-item disabled"
                      }
                      onClick={() =>
                        props.activePage !== 1
                          ? props.onPageChange(
                              props.activePage - 1,
                              props.limit
                            )
                          : null
                      }
                    >
                      <a class="page-link" href="#">
                        Prev.
                      </a>
                    </li>
                  }
                </Bootstrap.Col>
                <li class="page-item">
                  <h5 class="form-control ">
                    {props.activePage} of {props.items}
                  </h5>
                </li>
                <Bootstrap.Col>
                  {" "}
                  {
                    <li
                      class={
                        props.activePage < props.items
                          ? "page-item"
                          : "page-item disabled"
                      }
                      onClick={() =>
                        props.activePage < props.items
                          ? props.onPageChange(
                              props.activePage + 1,
                              props.limit
                            )
                          : null
                      }
                    >
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  }
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
