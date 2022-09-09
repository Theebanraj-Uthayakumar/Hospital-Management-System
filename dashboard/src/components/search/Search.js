import React from "react";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "@restart/ui/esm/Button";
import Row from "react-bootstrap/esm/Row";

const Search = ({ keyword, setKeyword }) => {
  const handleSearchChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    // <div>
    //   <input
    //     type="search"
    //     placeholder="search"
    //     value={keyword}
    //     onChange={handleSearchChange}
    //   />
    // </div>

    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={1}>
          Search
        </Form.Label>
        <Col sm={11}>
          <Form.Control
            type="search"
            placeholder="search"
            value={keyword}
            onChange={handleSearchChange}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Search;
