import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/user/add">Add User</Link>
                <Link to="/">All Users</Link>
            </nav>
        </div>
    );
};

export default Header;