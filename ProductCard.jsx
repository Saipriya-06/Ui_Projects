import Button from "react-bootstrap/Button";
import BCard from "react-bootstrap/Card";

export default function Card({ product }) {
  return (
    <>
      
      <div className="container border-1 rounded mt-3 p-3">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <BCard style={{ width: "18rem" }}>
                <BCard.Img variant="top" src={product.thumbnail} />
                <BCard.Body>
                  <BCard.Title>{product.title}</BCard.Title>
                  <BCard.Text>{product.description}</BCard.Text>
                  <Button variant="primary">Know More </Button>
                </BCard.Body>
              </BCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


