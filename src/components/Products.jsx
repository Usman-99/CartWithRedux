import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function Products() {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const cards = products.map((product) => {
    return (
      <div className="col-md-3 mb-5">
        <Card className="h-100 " key={product.id}>
          <div className="text-center mt-2">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>

          <Card.Body className="text-center">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text className="text-secondary">
              <b> Rs: {product.price}</b>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center bg-white">
            <Button variant="primary">Add to Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div className="row mt-5 mx-2">{cards}</div>
    </>
  );
}

export default Products;
