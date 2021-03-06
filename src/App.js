import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import Products from "./components/pages/Products/Product";
import Services from "./components/pages/Services/Services";
import SignUp from "./components/pages/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
