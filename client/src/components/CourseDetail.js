/* CourseDetail - This component provides the "Course Detail" screen by retrieving the detail for a course 
    from the REST API's /api/courses/:id route and rendering the course. The component also renders a "Delete Course" 
    button that when clicked should send a DELETE request to the REST API's /api/courses/:id route in order to delete a course. 
    This component also renders an "Update Course" button for navigating to the "Update Course" screen. */

import React, { Component } from 'react';

class CourseDetail extends Component {
    constructor() {
        super()
        this.state = {
            courses: []
        }
    }

    //runs automatically when component is mounted
    componentDidMount() {
        fetch('http://localhost:5000/api/courses') //call to back-end
            .then(res => res.json())
            .then(courses => this.setState({ courses }, () => console.log('Courses fetched..', courses)))
    }

    render() {

    }
}

export default CourseDetail