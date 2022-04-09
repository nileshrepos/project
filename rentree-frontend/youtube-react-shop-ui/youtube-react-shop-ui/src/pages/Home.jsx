import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import {BrowserRouter,Route} from 'react-router-dom';
import { Switch } from "@material-ui/core";
import Register from "./Register";


const Home = () => {
  return (
    <div>


      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>

    </div>
    


  );
};

export default Home;
