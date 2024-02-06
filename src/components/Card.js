import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>{product.rating}</Card.Text>
        <Card.Text>{product.company}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
