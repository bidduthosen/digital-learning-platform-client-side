import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaBook, FaHeart, FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CourseCart.css'

const CourseCart = ({course}) => {
    const {id, course_name, picture, author, lesson, class_time, course_free} = course;
    return (
        <div className='my-3'>
            <Card className='p-3 courser-cart'>
                <div className='courser-cart-img bg- bg-opacity-25 rounded-4'>
                    <Card.Img variant="top rounded-5" style={{width: '150px'}} src={picture} />
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <div className='d-flex'>
                        <Image style={{height: '40px'}} roundedCircle src={author.img} ></Image>
                        <div className='ms-2'>
                            <h6>{author.name}</h6>
                            <h6>{author.job}</h6>
                        </div>
                    </div>
                    <FaHeart style={{fontSize: '20px'}}></FaHeart>
                </div>
                <h3 className='my-3'>{course_name}</h3>
                <div className='d-flex justify-content-between p-3' style={{background: "rgba(245, 232, 203, 0.56)" , borderRadius: "10px"}}>
                    <h6><FaBook></FaBook> {lesson}</h6>
                    <h6><FaRegClock></FaRegClock> {class_time}</h6>
                    <h6>{course_free}</h6>
                </div>
                <hr />
                <Button variant="outline-info my-3"><Link to={`/course/${id}`} style={{color:"black", textDecoration: 'none'}}>Course Details</Link></Button> 
            </Card>
        </div>
    );
};

export default CourseCart;