import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const allCourse = useLoaderData();
    console.log(allCourse)
    return (
        <div>
            <h1>{allCourse.course_name}</h1>
            <Image src={allCourse.picture}></Image>
            <p>{allCourse.about}</p>
            <p>{allCourse.author.name}</p>
        </div>
    );
};

export default CourseDetails;