import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { remove, increaseQuantity, decreaseQuantity } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const removefromCart = (id) => {
    dispatch(remove(id));
  };

  const increaseQty = (id) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseQty = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const totalAmount = products.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

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
          <div className="d-flex justify-content-center align-items-center">
            <Button
              variant="outline-secondary"
              onClick={() => decreaseQty(item.id)}
            >
              -
            </Button>
            <span className="mx-3">{item.quantity}</span>
            <Button
              variant="outline-secondary"
              onClick={() => increaseQty(item.id)}
            >
              +
            </Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-center bg-white">
          <Button variant="danger" onClick={() => removefromCart(item.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className="container mt-4">
      <br />
      <br />
      <br />
      <h2 className="text-center">Your Cart</h2>

      {products.length === 0 ? (
        <h5 className="text-center mt-5">No products added in cart</h5>
      ) : (
        <>
          <div className="text-center mt-4 mb-4">
            <h4>Total Amount: Rs. {totalAmount.toFixed(2)}</h4>
          </div>
          <div className="row">{cardItems}</div>
        </>
      )}
    </div>
  );
};

export default Cart;
