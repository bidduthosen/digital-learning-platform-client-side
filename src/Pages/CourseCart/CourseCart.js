import React from 'react';
import Card from 'react-bootstrap/Card';

const CourseCart = ({course}) => {
    const {name,picture} = course;
    return (
        <div className='my-3'>
            <Card>
                <Card.Img variant="top rounded" style={{width: '160px'}} src={picture} />
                <Card.Body>
                  <Card.Text>{name}
                  </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCart;