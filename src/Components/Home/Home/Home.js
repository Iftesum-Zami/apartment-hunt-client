import React from 'react';
import ApartmentRentCard from '../ApartmentRentCard/ApartmentRentCard';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceCards from '../ServiceCards/ServiceCards';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ApartmentRentCard></ApartmentRentCard>
            <ServiceCards></ServiceCards>
            <Footer></Footer>
        </div>
    );
};

export default Home;