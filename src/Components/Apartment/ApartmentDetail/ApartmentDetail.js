import React from 'react';
import apartmentImg from '../../../photos/images/Rectangle (7).png';
import image1 from '../../../photos/images/Rectangle (8).png';
import image2 from '../../../photos/images/Rectangle (9).png';
import image3 from '../../../photos/images/Rectangle (10).png';
import image4 from '../../../photos/images/Rectangle (11).png';


const ApartmentDetail = () => {
    return (
        <div>
            <div>
                <img className="img-fluid pb-4" src={apartmentImg} alt=""/>
                <div className="row">
                    <div className="col-md-3"><img className="img-fluid" src={image1} alt=""/></div>
                    <div className="col-md-3"><img className="img-fluid" src={image2} alt=""/></div>
                    <div className="col-md-3"><img className="img-fluid" src={image3} alt=""/></div>
                    <div className="col-md-3"><img className="img-fluid" src={image4} alt=""/></div>
                </div>
            </div>
{/* --------------------------------------details-------------------------------------------------- */}
            <div className="pb-4 pt-5">
                <div className="d-flex justify-content-between">
                    <h2 style={{fontWeight: 'bold'}}>Family Apartment Three</h2>
                    <h2 style={{fontWeight: 'bold', color: '#275A53'}}>$256</h2>
                </div>
                <p className="text-secondary">3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
            </div>

            <div className="pb-4">
                <h4 style={{fontWeight: 'bold'}}>Price Details-</h4>
                <p className="text-secondary">
                    Rent/Month: $550 (negotiable) <br/>
                    Service Charge : 8,000/= Tk per month, subject to change <br/>
                    Security Deposit : 3 month’s rent <br/>
                    Flat Release Policy : 3 months earlier notice required <br/>
                </p>
            </div>

            <div>
                <h4 style={{fontWeight: 'bold'}}>Property Details-</h4>
                <p className="text-secondary">
                    Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. <br/>
                    Flat Size : 3000 Sq Feet. <br/>
                    Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit) <br/>
                    Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. <br/>
                    Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. <br/>
                    Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                </p>
            </div>
        </div>
    );
};

export default ApartmentDetail;