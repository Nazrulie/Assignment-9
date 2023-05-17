import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'
const Stubjects = ({ data }) => {
    return (
        <div className='subjects'>
            <img src={data.logo} alt="" />
            <div className='down-side'>
                <h4>{data.name}</h4>
                <button><Link to={`/${data.id}`}>Start practice</Link></button>
            </div>
        </div>
    );
};

export default Stubjects;