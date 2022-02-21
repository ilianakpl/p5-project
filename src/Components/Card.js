import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardComponent = ({ title, text, link, img }) => {
  return (
    <Card
      style={{
        width: "80%",
        marginBottom: "4rem",
        marginLeft: "10%",
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        style={{ borderRadius: "1.2%", height: "300px" }}
      />
      <div style={{ marginTop: "-20%" }}>
        <Card.Body>
          <Card.Title style={{ color: "white" }}>{title}</Card.Title>
          <Card.Text style={{ color: "white" }}>{text}</Card.Text>
          <Link to={`${link}`}>
            <Button variant="light">{"View"}</Button>
          </Link>
        </Card.Body>
      </div>
    </Card>
  );
};
