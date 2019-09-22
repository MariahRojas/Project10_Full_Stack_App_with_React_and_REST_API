/* Header- Displays the top menu bar for the application and includes buttons for signing in and signing up 
    (if there's not an authenticated user) or the user's first and last name and a button for signing out (if there's an authenticated user).*/

import React,{ Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

function Header({ context:{ authenticatedUser }, location:{ pathname }}){
  return (
    <Fragment>
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo"><Link to="/">Courses</Link></h1>
          <nav>
          {
            //authenticted user will be greeted!
            (authenticatedUser !== null)?
            <Fragment>
              <span>Welcome,{` ${authenticatedUser.firstName} ${authenticatedUser.lastName}`} </span>
              <Link className="signout" to="/signout">Sign Out</Link>
            </Fragment>
            :
            <Fragment>
              <Link className="signup" to="/signup">Sign Up</Link>
              <Link 
              className="signin" 
              to={{ pathname:"/signin" , 
                    state:{
                      from :pathname
                      }}}>Sign In</Link>
            </Fragment>
          }
          </nav>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(Header)