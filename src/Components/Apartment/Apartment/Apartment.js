import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ApartmentDetail from '../ApartmentDetail/ApartmentDetail';
import ApartmentForm from '../ApartmentForm/ApartmentForm';

const Apartment = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="d-flex align-items-center justify-content-center headerImg mb-5" style={{height: '300px'}}>
                <h1 style={{fontWeight: 'bold'}} className="text-center text-white">Apartment</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <ApartmentDetail></ApartmentDetail>
                    </div>
                    <div className="col-md-4">
                        <ApartmentForm></ApartmentForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apartment;