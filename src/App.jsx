import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarPanel";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
