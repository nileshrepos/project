import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Login from './pages/login';

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
          <div className='App-nav'>
              <Navbar />
          </div>

          <Login />
          <Login />
          <Login />
          <h1>good progress slowly!!</h1>

          
              <Footer />
        
    

     </>

  );
}

export default App;
