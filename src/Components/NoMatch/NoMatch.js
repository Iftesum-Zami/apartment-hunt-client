import React from 'react';
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div className="mt-5 ml-5">
            <h2>Page not Found</h2>
            <h4>404 error</h4>
            <p>back to <Link to="/">home</Link></p>
        </div>
    );
};

export default NoMatch;