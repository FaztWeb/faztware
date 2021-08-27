import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./context/providers/AuthContext";
import { ProductProvider } from "./context/providers/ProductsContext";

/* Components */
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/home/HomePage";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";

/* Pages */
import ProductFormPage from "./pages/products/ProductForm";

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
              <Route path="/auth/signin" exact component={Signin} />
              <Route path="/products/new" component={ProductFormPage} />
            </ProductProvider>
          </Switch>
        </div>
        <Toaster />
      </AuthProvider>
    </Router>
  );
}

export default App;
