import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import axios from "axios";

const UserList = () => {
  const usersAPI = "https://jsonplaceholder.typicode.com/users";

  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get(usersAPI)
      .then((res) => setListOfUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ marginLeft: "2%" }}>
      <Row xs={1} md={2} className="g-4">
        {listOfUser.map((user) => (
          <Col>
            <Cards key={Math.random()} user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserList;
