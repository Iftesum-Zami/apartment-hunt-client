import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardNavbar from '../../Shared/DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import MyRentList from '../MyRentList/MyRentList';

const MyRent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [rents, setRents] = useState([]);
    // ?email='+loggedInUser.email

    useEffect(() => {
        fetch('https://rocky-tundra-21843.herokuapp.com/checkMyRent')
        .then(res => res.json())
        .then(data => {
            setRents(data);
        })
        .catch(err => console.log(err))
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
                        <MyRentList rents={rents} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyRent;