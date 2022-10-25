import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSiteNav.css'

const LeftSiteNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then( res => res.json())
        .then( data => setCourses(data))
    }, [])

    return (
        <div className='py-3'>
            <h3 style={{textAlign: 'center', paddingBottom: '15px'}}>Course List</h3>
            {
                courses?.map(course=> <p className='courses-info' key={course.id}><Link className='courses-link'  to={`/course/${course.id}`}>{course.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSiteNav;