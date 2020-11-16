import React from 'react';
import './footer.css';
import socialLogo1 from '../../../photos/logos/Vector-1.png';
import socialLogo2 from '../../../photos/logos/Vector-2.png';
import socialLogo3 from '../../../photos/logos/Vector-3.png';
import socialLogo4 from '../../../photos/logos/Vector-4.png';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#275A53', color: 'white'}}>
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-md-5 p-5">
                        <p>
                            H#340 (4th Floor), Road #24,
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                            Phone: 018XXXXXXXX
                            E-mail: info@company.com
                        </p>
                    </div>
                    <div className="col-md-2 pt-2 pb-3">
                        <h5>Company</h5>
                        <ul className="footerList">
                            <li>About</li>
                            <li>Site Map</li>
                            <li>Support Center</li>
                            <li>Terms Conditions</li>
                            <li>Submit Listing</li>
                        </ul>
                    </div>
                    <div className="col-md-2 pt-2 pb-3">
                        <h5>Quick Links</h5>
                        <ul className="footerList">
                            <li>Quick Links</li>
                            <li>Rentals</li>
                            <li>Sales</li>
                            <li>Contact</li>
                            <li>Terms Conditions</li>
                            <li>Our blog</li>
                        </ul>
                    </div>
                    <div className="col-md-3 pt-2 pb-3">
                        <h5>About Us</h5>
                        <p>
                            We are the top real estate 
                            agency in Sydney, with agents 
                            available to answer any 
                            question 24/7.
                        </p>
                        <div className="d-flex justify-content-between">
                            <img src={socialLogo1} style={{width: '25px'}} className="img-fluid" alt=""/>
                            <img src={socialLogo2} style={{width: '25px'}} className="img-fluid" alt=""/>
                            <img src={socialLogo3} style={{width: '25px'}} className="img-fluid" alt=""/>
                            <img src={socialLogo4} style={{width: '25px'}} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;