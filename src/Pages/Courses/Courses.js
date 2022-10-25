import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div  >
            <Container>
                <Row md={2}>

                        {
                            courses?.map(course=> <CourseCart 
                                key={course.id}
                                course={course}
                            ></CourseCart>)
                        }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;