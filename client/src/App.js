import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Provider */
import { AuthProvider, CartProvider, ProductProvider } from "./context";

/* Components */
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/home/HomePage";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";

/* Pages */
import ProductFormPage from "./pages/products/ProductForm";
import CartPage from "./pages/cart/CartPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <div className="container App">
            <Switch>
              <ProductProvider>
                <Route path="/" exact component={HomePage} />
                <Route path="/auth/signup" exact component={Signup} />
                <Route path="/auth/signin" exact component={Signin} />
                <Route path="/products/new" component={ProductFormPage} />
                <Route path="/cart" component={CartPage} />
              </ProductProvider>
            </Switch>
          </div>
        </CartProvider>
      </AuthProvider>
      <Toaster />
    </Router>
  );
}

export default App;
