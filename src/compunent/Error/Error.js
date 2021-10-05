import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div>
            <div className='error'></div>
            <Link to="/home" className="btn btn-md btn-warning mt-3">Back to Home</Link>
        </div>
    );
};

export default Error;