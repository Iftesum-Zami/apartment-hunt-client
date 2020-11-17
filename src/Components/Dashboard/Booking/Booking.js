import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../../Shared/DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import BookingList from '../BookingList/BookingList';

const Booking = () => {
    const [bookingList, setBookingList] = useState([])

    useEffect(() => {
        fetch('https://rocky-tundra-21843.herokuapp.com/allBookingList')
        .then(res => res.json())
        .then(data => setBookingList(data))
    }, [])
    return (
        <section className="dashboard">
            <div className="container-fluid">
                <DashboardNavbar />
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <h3 className="mt-3">Booking List</h3>
                        <BookingList bookingList={bookingList} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;