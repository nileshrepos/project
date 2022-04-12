import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import { Switch, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar";
import Games from "./pages/Games";
import Footer from "./components/Footer";
//import Cart from './component/Cart';
// import Cart from './Cart';
import Mycart from "./pages/Mycart";


function App() {
  return (<div>
  
  <BrowserRouter>
  <Navbar/>   
  <Switch>
      
  <Route path="/" component={Home} exact></Route>
  <Route path="/register" component={Register} exact></Route>
  <Route path="/login" component={Login} exact></Route>
  {/* <Route path="/cart" component={Cart} exact></Route> */}
  <Route path="/Games" component={Games} exact></Route>
  {/* <Route path="/cart-section" exact element={<Cart />} /> */}
  {/* <Route path="/cart" element={<Mycart />} exact /> */}
  <Route path="/cart" component={Mycart} exact></Route>
  
  </Switch>
  <Footer />
  </BrowserRouter> 
  
  </div>
  );


  //return <Home/>;
}

export default App;