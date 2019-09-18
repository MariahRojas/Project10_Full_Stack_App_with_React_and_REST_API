import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Courses extends Component {
    constructor() {
        super()             //call super becuase this is being imbedded into a parent component 
        this.state = {      //initiaze state 
            courses: []
        }
    }

    //lifecycle method runs automatically when component is mounted
    componentDidMount() {
        fetch('http://localhost:5000/api/courses') //call to back-end
            .then(res => res.json())
            .then(courses => this.setState({courses}, () => console.log('Courses fetched..', courses)))
    }

    render() {
        return (
            <div className="bounds">              
                {this.state.courses.map(course =>
                <div className="grid-33"><a className="course--module course--link" href="courses/detail">
                    <h4 key={course.id} className="course--label">Course</h4>
                    <h3 key={course.id} className="course--title">{course.title}</h3>
                </a></div>
                )}
                <div className="grid-33"><a className="course--module course--add--module" href="courses/create">
                        <h3 className="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 13 13" className="add">
                                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                            </svg>New Course</h3>
                    </a></div>             
            </div>
        )
    }
}
        
export default Courses


/* This component provides the "Courses" screen by retrieving the list of courses 
    from the REST API's /api/courses route and rendering a list of courses. 
    *Each course needs to link to its respective "Course Detail" screen. 
    *This component also renders a link to the "Create Course" screen. */       