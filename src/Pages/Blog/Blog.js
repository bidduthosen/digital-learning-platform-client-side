import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider';

const Blog = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>{user?.displayName}</h1> 
            <h1>{user?.email}</h1>
            <Image src={user?.photoURL}></Image>
            <h1>blogs</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ratione modi nihil quasi dolorum eius consequuntur enim error porro veritatis quas laudantium libero necessitatibus mollitia distinctio molestias, omnis velit architecto. Et repudiandae amet libero debitis ad earum quas est id!</p>
        </div>
    );
};

export default Blog;