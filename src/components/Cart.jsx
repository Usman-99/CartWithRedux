import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const removefromCart = (id) => {
    dispatch(remove(id));
  };
  const products = useSelector((state) => state.cart);
  const card = products.map((item) => {
    return (
      <div className="col-md-12 mb-5">
        <Card className="h-100 " key={item.id}>
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
              <b> Rs: {item.product.price}</b>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center bg-white">
            <Button
              variant="warning"
              onClick={() => {
                removefromCart(item.id);
              }}
            >
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return <div className="row">{card}</div>;
};

export default Cart;
