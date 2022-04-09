import React, { useEffect, useState } from 'react'
import base_url from '../api/bootapi';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  
  

    useEffect(() => {
        document.title = "Add User";
      }, []);
    
      const [user, setUser] = useState({});
        //form handler function
        const handleForm = (e) => {
            toast.success("hello toaster");
          console.log(user);
          postDatatoServer(user);
          e.preventDefault();
        };
    
      //creating function to post data on server
      const postDatatoServer = (data) => {
          axios.post(`${base_url}/users`,data).then(
            (response) => {
              console.log(response);
              console.log("success");
              toast.success("User Registration successfully");
            },(error) => {
              console.log(error);
              console.log("error");
              toast.error("something went wrong");
            }
    
          )
      }
  
    return (
    
    <div>
      <section className="registration-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Rentree Team.
                  </h1>
                  <p className="main-hero-para">
                    Rentree one stop destination for renting the trusted one.
                  </p>
                  <figure>
                    <img
                      src="./images/register2.gif"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST"  onSubmit={handleForm}>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          onChange={(e) => {
                            setUser({...user,firstname:e.target.value});
                          }}

                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          onChange={(e) => {
                            setUser({...user,lastname:e.target.value});
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          onChange={(e) => {
                            setUser({...user,contactnumber:e.target.value});
                          }}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          onChange={(e) => {
                            setUser({...user,email:e.target.value});
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          onChange={(e) => {
                            setUser({...user,address:e.target.value});
                          }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Password"
                          onChange={(e) => {
                            setUser({...user,password:e.target.value});
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                      >
                        I agree that the above details are valid.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                    //   onClick={submitData}
                        style={{backgroundColor:"#6495ED"}}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registration
