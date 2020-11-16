import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import './header.css';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="headerImg d-flex justify-content-center align-items-center">
                <form className="">
                <h2 className="text-center text-white pb-4">FIND YOUR HOUSE RENT</h2>
                    <div class="form-row align-items-center">
                        <div class="col-auto">
                            <label class="sr-only" for="inlineFormInput">Name</label>
                            <input style={{width: '350px'}} type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Search"/>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-secondary mb-2">Find Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Header;