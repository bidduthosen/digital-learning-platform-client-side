import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
                <div>
                    
                    <h3>1.What is cors?</h3>
                    <p><strong>Answer:</strong> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                    For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
                </div>
                <div>
                    <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p><strong>Answer:</strong> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Recently we have been exploring how to create multi platform apps (Android and iOS) that would sync data across supported platforms. We wanted to minimize the need for complex server logic, and if possible, remove custom server logic. Then we came across Firebase. Sounds familiar? Let me give you a short intro. Firebase is the Google’s platform that helps developers build apps. Firebase offers services like authentication, database, storage services and plenty of other services like cloud messaging or test lab. For more info check https://firebase.google.com/ .</p>
                </div>
                <div>
                    <h3>3. How does the private route work?</h3>
                    <p><strong>Answer:</strong> Steps for writing public and private routes in React app using React Router
                        
                    When developing a React Application with Authentication, we might require public and private routes. Let's first see what they are?
                        
                    <strong>Public Routes</strong>
                    Public routes are Log in, SignUp, Forgot Password, Reset Password. In simple words, These routes can be accessed before login into the App.
                        
                    <strong>Private Routes</strong>
                    Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
                        
                    The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
                        
                    In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start
                        
                    <strong>Public Routes</strong>
                    First, let us create a PublicRoute.js component to handle public route conditions as below</p>
                </div>
                <div>
                    <h3>4.What is Node? How does Node work?</h3>
                    <p><strong>Answer:</strong>In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.

                    While spawning threads incurs less memory and CPU overhead than forking processes, it can still be inefficient. The presence of a large number of threads can cause a heavily loaded system to spend precious cycles on thread scheduling and context switching, which adds latency and imposes limits on scalability and throughput.</p>
                </div>
        </Container>
    );
};

export default Blog;