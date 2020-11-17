import React from 'react';
import gif from '../../../photos/loading spinner.gif';

const MyRentList = ({rents}) => {
    return (
        <div className="col-md-12 mt-3">
            <table className="table table-borderless form-inner mr-5 p-3">
                {
                    rents.length === 0 && <div><img src={gif} alt=""/></div>
                }
                <thead className="table-head">
                    <tr>
                        <th className="text-secondary" scope="col">House Name</th>
                        <th className="text-secondary" scope="col">Price</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rents.map(rent => 
                        <tr>
                            <td>{rents.title}</td>
                                <td>{rents.price}</td>
                            <td>
                            <select className="border-0">
                                <option value={rents.status}>{rents.status}</option>
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

export default MyRentList;