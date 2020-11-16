import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Login.css';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="d-flex justify-content-center align-items-center">
                <form className="">
                <h2 className="text-center text-black pb-4">Login</h2>
                    <div class="form-row align-items-center">
                        <div class="col-auto">
                            {/* <label class="sr-only" for="inlineFormInput">Name</label> */}
                            <input style={{width: '350px'}} type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Username or Email "/>
                            <input style={{width: '350px'}} type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Password "/>
                            <button type="submit" class="btn btn-secondary mb-2">Login</button>
                            <h5>Dont have an account</h5>
                        </div>
                        <div class="col-auto">
                            {/* <button type="submit" class="btn btn-secondary mb-2">Find Now</button> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;