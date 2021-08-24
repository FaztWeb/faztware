import "./App.css";
import { ProductProvider } from "./context/providers/ProductsContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Components */
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/home/HomePage";
import ProductForm from "./pages/products/ProductForm";

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container App">
        <Switch>
          <ProductProvider>
            <Route path="/" exact component={HomePage} />
            <Route path="/products/new" component={ProductForm} />
          </ProductProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
