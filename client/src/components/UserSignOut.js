/* UserSignOut - This component is a bit of an oddball as it doesn't render any visual elements. 
    Instead, it signs out the authenticated user and redirects the user to the default route (i.e. the list of courses).*/

import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function SignOut({ context:{ actions:{ signOut } } }){
    signOut();
    // removes authenticated user from cookies once signed out
    Cookies.remove('authenticatedUser');
    return <Redirect to='/'/>;
}