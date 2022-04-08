import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Switch, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (<div>
  <BrowserRouter> 
  <Switch>
  <Route path="/" component={Home} exact></Route>
  <Route path="/register" component={Register} exact></Route>
  <Route path="/login" component={Login} exact></Route>
  
  </Switch>
  </BrowserRouter> 
  </div>
  );


  //return <Home/>;
}

export default App;