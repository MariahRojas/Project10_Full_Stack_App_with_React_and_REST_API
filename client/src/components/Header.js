/* Header- Displays the top menu bar for the application and includes buttons for signing in and signing up 
    (if there's not an authenticated user) or the user's first and last name and a button for signing out (if there's an authenticated user).*/

import React from 'react';
import { Link } from 'react-router-dom';

/* Header */
const Header = (props) => {
    return (
        <div className="header">
            <div className="bounds">
            <h1 className="header--logo"><Link to="/">Courses</Link></h1>
            <nav><a className="signup" href="signup">Sign Up </a><a className="signin" href="sign-in">Sign In</a></nav>
            </div>
        </div>      
    )
}

export default Header