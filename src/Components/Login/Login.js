import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Login.css';

const Login = () => {
    return (
        <div> 
            <Navbar></Navbar>
            <div className="d-flex justify-content-center align-items-center my-5 py-5">
                <div className="px-4 py-4" style={{border: "1px solid gray", borderRadius: "5px"}}>
                <form className="">
                <h2 className="text-center text-black pb-4">Login</h2>
                    <div class="form-row align-items-center">
                        <div class="col-auto">
                            {/* <label class="sr-only" for="inlineFormInput">Name</label> */}
                            <input style={{width: '350px'}} type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Username or Email "/>
                            <input style={{width: '350px'}} type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Password "/>
                            <input type="checkBox"/> <span>Remember</span> <span>Forgot Password</span>
                            <br/>
                            <button type="submit" class="btn btn-secondary mb-2" style={{backgroundColor: "#275A53", width: "350px"}}>Login</button>
                            <h5>Don't have an account</h5>
                        </div>
                        <div class="col-auto">
                            {/* <button type="submit" class="btn btn-secondary mb-2">Find Now</button> */}
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;