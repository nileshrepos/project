import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Login from './pages/login';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/home';
<<<<<<< HEAD
// import Testimonial from './pages/testimonial';
=======

>>>>>>> fc46d0913ef9c7c1199a4e0dbc2d0647aa0b1785
import Aim from './component/Aim';
import AboutUs from './pages/aboutUs';
import Registration from './pages/register';
import Cart from './components/Cart';

function App() {
  return (
   <>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div> */}
          {/* <div className='App-nav'>
              <Navbar />
          </div> */}

          {/* <Login />
          <Login />
          <Login />
          <h1>good progress slowly!!</h1>

          
          
          <Footer /> */}
        
          <Router>
            {/* <Container> */}
              {/* <Navbar /> */}
                  {/* route use kiya jata hai kya click karne par kaha jana hai */}
                  {/* <Home /> */}
                  <Routes>
                  {/*not waorking: <Route path="/" exact component={<Home />} /> */}
                  <Route path="/" exact element={<Home />} />
                  {/* <Route path="/add-course" element={<Login />} exact/>
                  <Route path="/view-courses" element={<Allcourses />} exact/>
                 */}
                 <Route path="/testimonial-section" exact element={<AboutUs />} />
                 <Route path="/aim-section" exact element={<AboutUs />} />
                 <Route path="/vision-section" exact element={<AboutUs />} />
                 <Route path="/login-section" exact element={<Login />} />
                 <Route path="/register-section" exact element={<Registration />} />
		   <Route path="/cart-section" exact element={<Cart />} />
                  </Routes>
                  
                  {/*abb hummne define tho kardiya par jab isse fir bhi karvana hoga
                    tho voo hum karege menu.jsx mai jakar href attribute set karke*/  
                }
            {/* </Container> */}
        </Router>
    

     </>

  );
}

export default App;
