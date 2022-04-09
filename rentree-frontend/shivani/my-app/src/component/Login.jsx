import React from 'react'
import Image from './Image'


const Login = () => {

    // const [user,setLogin ] = useState({});
   
    // const loginHandler = (e) => {

    //     console.log(e.target.value);
    //     getDatafromServer(user);
    //     e.preventDefault();
    // }

    // const [course, setCourse] = useState({});
    // //form handler function
    // const handleForm = (e) => {
    //   console.log(course);
    //   postDatatoServer(course);
    //   e.preventDefault();
    // };

  //creating function to post data on server
//   const postDatatoServer = (data) => {
//       axios.post(`${base_url}/courses`,data).then(
//         (response) => {
//           console.log(response);
//           console.log("success");
//           toast.success("Course added successfully");
//         },(error) => {
//           console.log(error);
//           console.log("error");
//           toast.error("something went wrong");
//         }

//       )
//   }

  

    return (
        <>
            {/* <div className="row mt-5 d-flex justify-content-centre">
                <div className="col-md-5 mx-5">
                    <img src="images/loginanimated.gif" className="img-fluid animated fly-in" alt='login' style={{ height: "300px", width: "400px" }} />
                </div>
               
                <div class="col-md-5">
                  <div className="card" style={{ width: "50%," }}>
                        <div className="card-body">
                            <h5 className="card-title">Login form</h5>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                         onChange={(e) => {
                                            setCourse({...user,email:e.target.value});
                                          }}
                                    />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                         onChange={(e) => {
                                            setCourse({...user,password:e.target.value});
                                          }}
                                    />
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>

                                <button type="submit" className="btn btn-primary" onClick={loginHandler}>Submit</button>
                            </form>

                        </div> 
                    </div>
                </div> 

            </div> */}

            {/* <div  className="row mt-5 d-flex justify-content-centre">
            <Image />
                <div class="col-md-5">
                <CardMy />
                 </div>
            </div> */}
            {/* registration section */}
             {/* <div className="row mt-5 d-flex justify-content-centre">
                <div className="col-md-5 mx-5">
                 
                  
                </div>
               
                <div class="col-md-5">
                <CardMy />
                 </div>
            </div> */}

<section className="registration-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Login to Our <br /> Rentree Portal.
                  </h1>
                  <p className="main-hero-para">
                    Rentree one stop destination for renting the trusted one.
                  </p>
                  <figure>
                    <img
                      src="./images/register1.gif"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                  <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Enter your Email"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="password"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Password"
                        />
                      </div>
                    </div>
                   
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
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



        </>
    )
}

export default Login
