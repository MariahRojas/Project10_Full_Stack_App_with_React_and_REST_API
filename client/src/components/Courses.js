import React, { Component } from 'react';

class Courses extends Component {
    constructor() {
        super()
        this.state = {
            allCourses: []
        }
    }

    //runs automatically when component is mounted
    componentDidMount() {
        fetch('http://localhost:5000/api/courses') //call to back-end
            .then(res => res.json())
            .then(allCourses => this.setState({allCourses}, () => console.log('Courses fetched..', allCourses)))
    }

    render() {
        return (
            <div className="bounds">
                <ul>
                    {this.state.allCourses.map(allCourse =>
                    <li key={allCourse.id}>{allCourse.title} {allCourse.description}</li>
                    )}
                </ul>
            </div>
        )
    }
}
        
export default Courses


/*                   <div class="grid-33"><a class="course--module course--link" href="course-detail.html">
                      <h4 class="course--label">Course</h4>
                      <h3 class="course--title">Build a Basic Bookcase</h3>
                    </a></div>
                  <div class="grid-33"><a class="course--module course--link" href="course-detail.html">
                      <h4 class="course--label">Course</h4>
                      <h3 class="course--title">Learn How to Program</h3>
                    </a></div>
                  <div class="grid-33"><a class="course--module course--link" href="course-detail.html">
                      <h4 class="course--label">Course</h4>
                      <h3 class="course--title">Learn How to Test Programs</h3>
                    </a></div>
                  <div class="grid-33"><a class="course--module course--add--module" href="create-course.html">
                      <h3 class="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                          viewBox="0 0 13 13" class="add">
                          <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                        </svg>New Course</h3>
                    </a></div> */
/* This component provides the "Courses" screen by retrieving the list of courses 
    from the REST API's /api/courses route and rendering a list of courses. 
    Each course needs to link to its respective "Course Detail" screen. 
    This component also renders a link to the "Create Course" screen. */

    // Home route /

        // retrieve list of courses
            //each course needs a link to course detail.
        
        //create course link                    