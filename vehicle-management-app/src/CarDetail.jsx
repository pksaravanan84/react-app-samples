import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

export default function CarDetail(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Edit</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );

  CarDetail.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  CarDetail.defaultProps = {
    title: "Card Title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  };
}
