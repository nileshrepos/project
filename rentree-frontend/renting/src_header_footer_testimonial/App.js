import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Login from './pages/login';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/home';
import Testimonial from './pages/testimonial';
import Aim from './component/Aim';
import AboutUs from './pages/aboutUs';

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
