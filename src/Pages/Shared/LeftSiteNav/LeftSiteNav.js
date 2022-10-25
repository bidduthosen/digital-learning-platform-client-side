import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSiteNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then( res => res.json())
        .then( data => setCourses(data))
    }, [])

    return (
        <div>
            <h4>Course List</h4>
            {
                courses.map(course=> <p key={course.id}><Link to={`/course/${course.id}`}>{course.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSiteNav;