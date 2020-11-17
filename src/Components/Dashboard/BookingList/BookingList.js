import React from 'react';
import gif from '../../../photos/loading spinner.gif';

const BookingList = ({bookingList}) => {
    return (
        <div className="mt-2">
            <table className="table table-borderless form-inner">
                {
                    bookingList.length === 0 && <div><img src={gif} alt=""/></div>
                }
                <thead className="table-head">
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email ID</th>
                        <th className="text-secondary" scope="col">Phone NO</th>
                        <th className="text-secondary" scope="col">message</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingList.map((allbook) => 
                            <tr>
                                <td>{allbook.name}</td>
                                <td>{allbook.email} </td>
                                <td>{allbook.phone}</td>
                                <td>{allbook.message}</td>
                                <td>
                                <select className="border-0">
                                    <option value={allbook.status}>{allbook.status}</option>
                                    <option value="On going">On going</option>
                                    <option value="Done">Done</option>
                                </select>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;