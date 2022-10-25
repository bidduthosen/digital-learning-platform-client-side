import React from 'react';
import { Image } from 'react-bootstrap';

const LoginBanner = () => {
    return (
        <div className='login-banner-img'>
            <Image src='https://i.ibb.co/LzV6djC/login-img.png" '></Image>
            <h2>Welcome To</h2>
            <h2>Digital learning Courses</h2>
        </div>
    );
};

export default LoginBanner;