import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='all-container'>
            <h3>Code Planet </h3>
            <div className='link-container'>
                <Link to='/'>Home</Link>
                <Link to='/Topics'>Topics</Link>
                <Link to='/Statistics'>Statistics</Link>
                <Link to='/Blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;