import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const LoginBanner = () => {
    return (
        <div className='login-banner-img'>
            <Image src='https://i.ibb.co/LzV6djC/login-img.png" '></Image>
            <h2>Welcome To</h2>
            <h2>Digital learning Courses</h2>
            <div>
            <Carousel className='mt-5'>
                <Carousel.Item>
                  <img 
                    style={{height: '300px'}}
                    className="d-block w-100"
                    src="https://i.ibb.co/Lg3Syv1/react-js.png"
                    alt="Third slide"
                  />

                <Carousel.Caption>
                    <h5 className='text-dark'>React Js</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{height: '300px'}}
                    className="d-block w-100"
                    src="https://i.ibb.co/JRQ5ccz/java-Script.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5 className='text-dark'>JavaScript</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{height: '300px'}}
                    className="d-block w-100"
                    src="https://i.ibb.co/mbgV2M9/firebase.png"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h5 className='text-dark'>Firebase</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img 
                    style={{height: '300px'}}
                    className="d-block w-100"
                    src="https://i.ibb.co/9Wv1H15/Bootstrap.png"
                    alt="Third slide"
                  />

                <Carousel.Caption>
                    <h5 className='text-dark'>Bootstrap</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img 
                    style={{height: '300px'}}
                    className="d-block w-100"
                    src="https://i.ibb.co/LkyGY5w/css.png"
                    alt="Third slide"
                  />

                <Carousel.Caption>
                    <h5 className='text-dark'>Css</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img 
                    style={{height: '300px'}}
                    className="d-block w-100"
                    src="https://i.ibb.co/cYns8J2/html.png"
                    alt="Third slide"
                  />

                <Carousel.Caption>
                    <h5 className='text-dark'>HTML</h5>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            </div>
        </div>
    );
};

export default LoginBanner;