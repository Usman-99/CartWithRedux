import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import statusCode from "../utils/statusCode";
import Alert from "react-bootstrap/Alert";
function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (status === statusCode.LOADING) {
    return (
      <div className="text-center mt-2">
        <br />
        <br />
        <Alert variant="danger">Loading.........</Alert>
      </div>
    );
  }
  if (status === statusCode.ERROR) {
    return (
      <div className="text-center mt-2">
        <br />
        <br />
        <Alert variant="danger">Something went wrong.........</Alert>
      </div>
    );
  }
  const addtoCart = (product) => {
    dispatch(add(product));
  };
  const cards = products.map((product) => {
    return (
      <div className="col-md-3 mb-5" key={product.id}>
        <Card className="h-100 ">
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
            <Button variant="primary" onClick={() => addtoCart(product)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  console.log(products);

  return (
    <div className="text-center mt-2">
      <br />
      <br />
      <br />
      <h2>Store Products</h2>

      <div className="row mt-5 mx-2">{cards}</div>
    </div>
  );
}

export default Products;
