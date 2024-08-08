import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const removefromCart = (id) => {
    dispatch(remove(id));
  };

  const cardItems = products.map((item) => (
    <div className="col-md-12 mb-5" key={item.id}>
      <Card className="h-100">
        <div className="text-center mt-2">
          <Card.Img
            variant="top"
            src={item.product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>

        <Card.Body className="text-center">
          <Card.Title>{item.product.title}</Card.Title>
          <Card.Text className="text-secondary">
            <b>Rs: {item.product.price}</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center bg-white">
          <Button variant="warning" onClick={() => removefromCart(item.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className="container mt-4">
      <h2 className="text-center">Your Cart</h2>

      {products.length === 0 ? (
        <h4 className="text-center mt-5 text-primary">
          No products added in cart
        </h4>
      ) : (
        <div className="row">{cardItems}</div>
      )}
    </div>
  );
};

export default Cart;
