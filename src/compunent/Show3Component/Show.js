import React, { useEffect, useState } from 'react';
import Course from './../Course/Course';

const Show = () => {
    const [courses,setShow] = useState([])
    useEffect(()=>{
        fetch('./FackData.json')
        .then(res => res.json())
        .then(data => setShow(data))
    },[])
    const showCart = courses.slice(0,4)
    return (
        
          <div className="container">
              <h1><strong>Our  <span className="text-warning">Courses</span></strong></h1>
               <div className="row">
           {
                showCart.map(courses => <Course course={courses}></Course>)
            }
           </div>
          </div>
        
    );
};

export default Show;