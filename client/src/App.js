import React, {Component} from 'react';
import Header from './components/Header';
import Courses from './components/Courses'

class App extends Component {

  render () {
    return (
      // JSX to render goes here...
      <div id="root">
          <div>
            <Header />
            <Courses />
        </div>   
      </div>
    );
  }
}

export default App;