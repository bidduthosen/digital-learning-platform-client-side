import React from 'react';
import Card from 'react-bootstrap/Card';
import './CourseCart.css'

const CourseCart = ({course}) => {
    const {name,picture} = course;
    return (
        <div className='my-3'>
            <Card className='p-3 courser-cart'>
                <Card.Img variant="top rounded-5" style={{width: '150px'}} src={picture} />
                <Card.Footer className="w-100 text-center mt-3 ">{name}</Card.Footer>
            </Card>
        </div>
    );
};

export default CourseCart;