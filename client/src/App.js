import React, {Component} from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

//components
import Header from './components/Header';
import Courses from './components/Courses';
import NewCourse from './components/CreateCourse';


class App extends Component {

  render () {
    return (
      // JSX to render goes here...
      <Router>
      <React.Fragment>
        <Header />
        <Switch>
        <Route exact path="/" component={Courses} />
        <Route exact path="/courses/create" component={NewCourse} />
        </Switch>
      </React.Fragment>
    </Router>
    );
  }
}

export default App;