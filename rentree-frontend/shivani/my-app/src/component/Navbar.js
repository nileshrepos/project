import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const signupHandler = () => {
    let History = useNavigate();

    History("/login-section");
  };

  // function app() {
  //   let history = useHistory();

  //   const redirect = () => {
  //     history.push('/your-path')
  //   }

  //   return (
  //     <div>
  //       <button onClick={redirect}>Redirect</button>
  //     </div>
  //   )
  //}

  return (
    <div className="mynav">
      <nav className="navbar navbar-expand-lg mb-5 navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="imglogo"
              src="images/Rentree-logos_transparent.png"
              alt="logo"
              style={{ width: "100px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ marginRight: "30px" }}
                >
                  Home
                  <HomeIcon />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ marginRight: "30px" }}
                >
                  About
                  <InfoIcon />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ marginRight: "30px" }}
                >
                  FAQs
                  <LiveHelpIcon />
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button
                className="btn  btn-style"
                type="submit"
                onClick={this.signupHandler}
              >
                SignUp
              </button>
              <button className="btn  btn-style btn-style-border" type="submit">
                LogIn
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar
