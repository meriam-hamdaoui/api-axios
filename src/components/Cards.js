import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ user }) => {
  const { name, email, address, phone, website, company } = user;
  const { street, suite, city, zipcode } = address;
  const { name: companyName, catchPhrase, bs } = company;

  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "750px",
          borderRadius: "25px",
        }}
      >
        <div style={{ width: "50%" }}>
          <Card.Img
            style={{ width: 100, heigth: 50 }}
            variant="top"
            src="/userImg.png"
          />
          <br />
          <Card.Text>
            <span>email :</span> {email}
          </Card.Text>
          <Card.Text>
            <span>phone :</span> {phone}
          </Card.Text>
          <Card.Text>
            <span>webSite :</span> {website}
          </Card.Text>
        </div>
        <Card.Body>
          <Card.Title style={{ color: "rgb(9, 9, 165)" }}>{name}</Card.Title>

          <Card.Text>
            <span>addrtess :</span> <br /> {street}, {suite}, {city} {zipcode}
          </Card.Text>
          <Card.Text>
            <span>company :</span> <br /> {companyName}, {catchPhrase}, {bs}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
