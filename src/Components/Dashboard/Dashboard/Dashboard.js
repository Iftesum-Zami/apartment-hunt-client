import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import DashboardNavbar from '../../Shared/DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="dashboard">
            <div className="container-fluid">
                <DashboardNavbar />
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10 d-flex justify-content-center">
                        <h2 className="mt-5">welcome to Dashboard {loggedInUser.name} </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;