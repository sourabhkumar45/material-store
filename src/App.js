import "./App.css";
import { useEffect } from "react";
import { fetchProducts } from "./redux/actions/productActions";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/cart" exact component={Cart} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
