import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ box }) => {
  return (
    <Card
      style={{ width: "18rem", height: "40rem", margin: "10px" }}
      key={box.id}
      className="float-start"
    >
      <Card.Img variante="top" src={box.img} />
      <Card.Body>
        <Card.Title>{box.box_model}</Card.Title>
        <Card.Text>Categoría: {box.category}</Card.Text>
        <Card.Text>Precio: ${box.precio}</Card.Text>
        <Link to={`/item/${box.id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
