import React from "react";
import { Button, Card } from "react-bootstrap";

function CountryInfo(props) {
  return (
    <div>
      <Card className="card">
        <Card.Img variant="top" src={props.name.flag} />
        <Card.Body>
          <Card.Title>{props.name.name}</Card.Title>
          <Card.Text>{props.name.capital}</Card.Text>
          <Button variant="primary">Clik Me!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CountryInfo;
