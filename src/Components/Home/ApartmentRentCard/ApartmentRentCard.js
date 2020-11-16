import React from 'react';
import './apartmentRentCard.css';
import image1 from '../../../photos/images/Rectangle (1).png';
import image2 from '../../../photos/images/Rectangle (2).png';
import image3 from '../../../photos/images/Rectangle (3).png';
import image4 from '../../../photos/images/Rectangle (4).png';
import image5 from '../../../photos/images/Rectangle (5).png';
import image6 from '../../../photos/images/Rectangle (6).png';
import SingleRentCard from '../SingleRentCard/SingleRentCard';

const allApartments = [
    {
        name: 'Washington Avenue',
        img: image1,
        location: 'Nasirabad H/S, Chattogram',
        bedRooms: '3 Bedrooms',
        bathRooms: '2 Bathrooms',
        price: '196'
    },
    {
        name: 'Family Apartment Three',
        img: image2,
        location: 'Nasirabad H/S, Chattogram',
        bedRooms: '3 Bedrooms',
        bathRooms: '2 Bathrooms',
        price: '356'
    },
    {
        name: 'Gorgeous house',
        img: image3,
        location: 'Nasirabad H/S, Chattogram',
        bedRooms: '3 Bedrooms',
        bathRooms: '2 Bathrooms',
        price: '283'
    },
    {
        name: 'Luxury villa',
        img: image4,
        location: 'Nasirabad H/S, Chattogram',
        bedRooms: '3 Bedrooms',
        bathRooms: '2 Bathrooms',
        price: '256'
    },
    {
        name: 'Epic Huda Palacio',
        img: image6,
        location: 'Nasirabad H/S, Chattogram',
        bedRooms: '3 Bedrooms',
        bathRooms: '2 Bathrooms',
        price: '345'
    },
    {
        name: 'Washington Avenue',
        img: image5,
        location: 'Nasirabad H/S, Chattogram',
        bedRooms: '3 Bedrooms',
        bathRooms: '2 Bathrooms',
        price: '536'
    },
]

const ApartmentRentCard = () => {
    return (
        <div style={{backgroundColor: '#E5E5E5', paddingTop: '20px', paddingBottom: '30px'}}>
            <div className="container">
                <p className="text-center">House Rent</p>
                <h3 className="text-center">Discover the latest Rent <br/> available today</h3>

                <div className="row">
                    {
                        allApartments.map(apartment => <SingleRentCard apartment={apartment}></SingleRentCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ApartmentRentCard;