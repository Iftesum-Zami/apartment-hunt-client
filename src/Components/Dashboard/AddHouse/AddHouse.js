import React from 'react';
import DashboardNavbar from '../../Shared/DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AddHouseForm from '../AddHouseForm/AddHouseForm';

const AddHouse = () => {
    return (
        <section className="dashboard">
            <div className="container-fluid">
                <DashboardNavbar></DashboardNavbar>
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <AddHouseForm></AddHouseForm>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddHouse;