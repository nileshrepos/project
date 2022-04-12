import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
// import Cart from "../pages/Cart";
import { Switch, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Alert } from "react-bootstrap";
import { useHistory} from "react-router-dom";
import {useNavigate} from "react-router-dom";
// import Cart from "../component/Cart";
import { Link } from 'react-router-dom';
// import Cartt from '../cartcomponents/components/Cart'


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 65%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {

 // let navigate = useNavigate();
 // let history = useHistory();
  const nextHandler = () => {
     console.log("working");
    // alert("do u want to shop")
  // <BrowserRouter>
  // <Switch>
      
   //<Route path="/component/(Cart.jsx)?" component={<Cart />} exact></Route>
  
  // </Switch>
  // </BrowserRouter>
  
  // <Link to='/new/location/'>Click Me</Link>

  
  // let path = './component/Cart';
  // navigate(path); 
  

  //const redirect = () => {
   // history.push('/cart-section')
  //}
   
  }

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
        <ShoppingCartOutlined onClick={nextHandler} />
        </Icon>
        <Link to="/cart" className='text-light text-decoration-none'>SHOP NOW</Link>
        <Icon>
          <SearchOutlined />
        </Icon>
        {/* <Icon>
          <FavoriteBorderOutlined />
        </Icon> */}
      </Info>
    </Container>
  );
};

export default Product;
