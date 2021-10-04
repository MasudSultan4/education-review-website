import React, { useEffect, useState } from 'react';
import Course from './../Course/Course';
import './AllCouses.css';

const AllCourses = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('./FackData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="container">
            <h1 className="margin"><strong>Our All <span className="text-warning">Courses</span></strong></h1>
            <div className="row">
            {
                courses.map(course => <Course course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default AllCourses;