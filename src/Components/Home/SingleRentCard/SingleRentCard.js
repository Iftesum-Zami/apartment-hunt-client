import React from 'react';
import locationImg from '../../../photos/logos/location.png';
import bed from '../../../photos/logos/bed.png';
import bath from '../../../photos/logos/bath.png';

const SingleRentCard = ({apartment}) => {
    return (
        <div className="col-md-4">
            <div class="card-deck pt-5">
                <div class="card">
                    <img src={apartment.img} class="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">{apartment.name}</h5>
                        <img src={locationImg} style={{width: '15px'}} alt=""/><span> {apartment.location}</span>
                        <div className="d-flex justify-content-between pt-3">
                            <div>
                                <img src={bed} style={{width: '20px'}} alt=""/><span> {apartment.bedRooms}</span>
                            </div>
                            <div>
                                <img src={bath} style={{width: '20px'}} alt=""/><span> {apartment.bathRooms}</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white d-flex justify-content-between" style={{borderTop: 'none'}}>
                        <p style={{fontSize: '30px', fontWeight: 'bolder', color: '#275A53'}}>${apartment.price}</p>
                        <button className="pl-3 pr-3" style={{border: 'none', backgroundColor: '#275A53', color: 'white'}}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRentCard;