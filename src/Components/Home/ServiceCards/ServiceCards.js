import React from 'react';
import serviceImg1 from '../../../photos/logos/serviceImg1.png';
import serviceImg2 from '../../../photos/logos/serviceImg2.png';
import serviceImg3 from '../../../photos/logos/serviceImg3.png';

const ServiceCards = () => {
    return (
        <div style={{backgroundColor: '#E5E5E5'}}>
            <div className="container">
                <p className="text-center">Services</p>
                <h3 className="text-center">We're an agency tailored to all <br/> clients' needs that always delivers</h3>

                <div className="row pt-5">
                    <div className="col-md-4">
                        <div className="p-4">
                            <div className="d-flex justify-content-center pb-3"> 
                                <img style={{width: '100px'}} className="img-fluid" src={serviceImg1} alt=""/>
                            </div>
                            <h5 className="text-center">Wide Range of Properties</h5>
                            <p className="text-center">With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4">
                            <div className="d-flex justify-content-center pb-3"> 
                                <img style={{width: '100px'}} className="img-fluid" src={serviceImg2} alt=""/>
                            </div>
                            <h5 className="text-center">Financing Made Easy</h5>
                            <p className="text-center">Our stress-free finance department that can find financial solutions to save you money.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4">
                            <div className="d-flex justify-content-center pb-3"> 
                                <img style={{width: '100px'}} className="img-fluid" src={serviceImg3} alt=""/>
                            </div>
                            <h5 className="text-center">Trusted by Thousands</h5>
                            <p className="text-center">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;