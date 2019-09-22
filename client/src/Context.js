import React, { Component } from 'react';
import Cookies from 'js-cookie'; //gives user a better experience when visiting the site by saving user input
import Data from './Data';
import Cryptr from 'cryptr';

const Context = React.createContext(); 
export class Provider extends Component {

  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
  };

  constructor() {
    super();
    this.data = new Data();
    this.cryptr = new Cryptr('Secretpass')
  }

  render() {
    const { authenticatedUser } = this.state;
    
    const value = {
      authenticatedUser,
      data: this.data,
      cryptr: this.cryptr,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
        errDisplay: this.errorsDisplay,
        cancel: this.cancel,
      },
    }

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  }

  
  signIn = async ( emailAddress, password ) => {
    const user = await this.data.getUser(emailAddress, password);
    const encryptedPassword = this.cryptr.encrypt(password);

    if (!user.isNull) {
      this.setState({ authenticatedUser: user });
      this.state.authenticatedUser.password = encryptedPassword;
      Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 1});
    }
    
    return user;
  }

  signOut = () => {
    this.setState({ authenticatedUser: null });
  }

  errorsDisplay = ( err ) => (
    <div>
      <h2 className="validation--errors--label">Validation errors</h2>
      <div className="validation-errors">
          <ul>
          {err.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
      </div>
    </div>
  )

  cancel = ( e, path ) => {
    e.preventDefault();
    if(!path)path = '/'
    window.location.href = path;
  }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    )
  }
}