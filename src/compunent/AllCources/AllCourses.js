import React, { useEffect, useState } from 'react';
import Course from './../Course/Course';

const AllCourses = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('./FackData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="container">
            <div className="row">
            {
                courses.map(course => <Course course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default AllCourses;