import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./utils/store";
import Register from "./components/Register";
import Login from "./components/login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:proId" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
