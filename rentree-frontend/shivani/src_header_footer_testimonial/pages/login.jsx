import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';


const login = () => {
    return (
        <>
            {/* <section id="header" className="d-flex align-items-centre"> */}
            <div className="row mt-5 d-flex justify-content-centre">
                <div className="col-md-4 mx-5">
                    <img src="images/loginanimated.gif" className="img-fluid animated fly-in" alt='login' style={{ height: "300px", width: "400px" }} />
                </div>
                <div class="col-md-5">
                    <div className="card" style={{ width: "50%," }}>
                        {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <h5 className="card-title">Login form</h5>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            {/* </section> */}
        </>
    )
}

export default login
