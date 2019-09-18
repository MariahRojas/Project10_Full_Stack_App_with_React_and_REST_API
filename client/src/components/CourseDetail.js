/* CourseDetail - This component provides the "Course Detail" screen by retrieving the detail for a course 
    from the REST API's /api/courses/:id route and rendering the course. The component also renders a "Delete Course" 
    button that when clicked should send a DELETE request to the REST API's /api/courses/:id route in order to delete a course. 
    This component also renders an "Update Course" button for navigating to the "Update Course" screen. */

import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class CourseDetail extends Component {
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
            <div className="actions--bar">
                <div className="bounds">
                    <div className="grid-100"><span><a class="button" href="update-course.html">Update Course</a><a class="button" href="#">Delete Course</a></span><a
                        className="button button-secondary" href="index.html">Return to List</a></div>
                </div>
            </div>
        )
    }
}
        
export default CourseDetail