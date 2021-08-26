import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./context/providers/AuthContext";
import { ProductProvider } from "./context/providers/ProductsContext";

/* Components */
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/home/HomePage";
import ProductForm from "./pages/products/ProductForm";

import "./App.css";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="container App">
          <Switch>
            <ProductProvider>
              <Route path="/" exact component={HomePage} />
              <Route path="/auth/signup" exact component={Signup} />
              <Route path="/products/new" component={ProductForm} />
            </ProductProvider>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
