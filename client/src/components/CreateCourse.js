/* CreateCourse - This component provides the "Create Course" screen by rendering a form that allows a user to create a new course. 
    The component also renders a "Create Course" button that when clicked sends a POST request to the REST API's /api/courses route. 
    This component also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses). */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewCourse extends Component {
    // constructor() {
    //     super()             //call super becuase this is being imbedded into a parent component 
    //     this.state = {      //initiaze state 
    //         courses: []
    //     }
    // }

    // //lifecycle method runs automatically when component is mounted
    // componentDidMount() {
    //     fetch('http://localhost:5000/api/courses') //call to back-end
    //         .then(res => res.json())
    //         .then(courses => this.setState({courses}, () => console.log('Courses fetched..', courses)))
    // }

    render() {
        return (
            <div className="bounds course--detail">
                <h1>Create Course</h1>
                <div>
                    <div>
                        <h2 className="validation--errors--label">Validation errors</h2>
                        <div className="validation-errors">
                            <ul>
                                <li>Please provide a value for "Title"</li>
                                <li>Please provide a value for "Description"</li>
                            </ul>
                        </div>
                    </div>
                    <form>
                        <div className="grid-66">
                            <div className="course--header">
                                <h4 className="course--label">Course</h4>
                                <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..."
                                    value=""></input></div>
                                <p>By Joe Smith</p>
                            </div>
                            <div className="course--description">
                                <div><textarea id="description" name="description" className="" placeholder="Course description..."></textarea></div>
                            </div>
                        </div>
                        <div className="grid-25 grid-right">
                            <div className="course--stats">
                                <ul className="course--stats--list">
                                    <li className="course--stats--list--item">
                                        <h4>Estimated Time</h4>
                                        <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                                            placeholder="Hours" value=""></input></div>
                                    </li>
                                    <li className="course--stats--list--item">
                                        <h4>Materials Needed</h4>
                                        <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..."></textarea></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-100 pad-bottom"><button className="button" type="submit">Create Course</button><Link to="/"><button className="button button-secondary" >Cancel</button></Link></div>
                    </form>
                </div>
            </div>
        )
    }
}
        
export default NewCourse
