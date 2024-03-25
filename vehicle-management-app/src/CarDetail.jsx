import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export default function CarDetail(props) {


  function deleteCarDetails() {
      console.log(props.carInfo);
  }

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>{props.carInfo.make}</Card.Title>
          <Card.Text>Model: {props.carInfo.model}</Card.Text>
          <Card.Text>Year: {props.carInfo.year}</Card.Text>
          <Card.Text>VIN: {props.carInfo.vin}</Card.Text>
          <Card.Text>Price: ${props.carInfo.price}</Card.Text>
          <a variant="primary" href="/EditCarDetails/1">Edit</a>{" "}
          <a variant="danger" href="#" onClick={deleteCarDetails}>Delete</a>{" "}
        </Card.Body>
      </Card>
    </>
  );
}
