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
              <ul>
                <li>1/2 x 3/4 inch parting strip</li>
                <li>1 x 2 common pine</li>
                <li>1 x 4 common pine</li>
                <li>1 x 10 common pine</li>
                <li>1/4 inch thick lauan plywood</li>
                <li>Finishing Nails</li>
                <li>Sandpaper</li>
                <li>Wood Glue</li>
                <li>Wood Filler</li>
                <li>Minwax Oil Based Polyurethane</li>
              </ul>
        </div>
      
        <Courses />
      </div>
    );
  }
}

export default App;