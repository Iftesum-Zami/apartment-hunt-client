import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHouseUser, faLock, faHome, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
// import plus from '../../../images/logos/add.png';
// import rent from '../../../images/logos/rent.png';
// import book from '../../../images/logos/booking.png';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://rocky-tundra-21843.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [])
    return (
        <section className="sidebar d-flex flex-column">
            <ul className="list-unstyled pt-4">
                <li className="mb-2">
                    <Link to="/" className="text-dark nav-link"> <FontAwesomeIcon className="mr-1 text-dark" icon={faHome} /> <span>Home</span> </Link>
                </li>

                {/* {
                    isAdmin ? <> */}
                        <li>
                            <Link to="/booking" className="text-dark nav-link">
                                <FontAwesomeIcon className="mr-2 text-dark" icon={faLock} />
                                <span>Booking</span></Link>
                        </li>
                        <li>
                            <Link to="/addHouse" className="text-dark nav-link"><FontAwesomeIcon className="mr-1 text-dark" icon={faPlus} /> <span>Add House</span></Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-dark nav-link"><FontAwesomeIcon className=" text-dark" icon={faUserPlus} /> <span>Make Admin</span></Link>
                        </li>
                    {/* </> : <> */}
                        <li>
                            <Link to="/myRent" className="text-dark nav-link">
                                <FontAwesomeIcon className="mr-2 text-dark" icon={faHouseUser} />
                                <span>My Rent</span> </Link>
                        </li>
                    {/* </>
                } */}
            </ul>
        </section>
    );
};

export default Sidebar;