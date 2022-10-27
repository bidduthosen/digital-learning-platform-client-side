import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import NotFound from "../../Pages/NotFound/NotFound";
import Premium from "../../Pages/Premium/Premium";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Courses></Courses>,
                loader: () => fetch('https://learning-server-lac.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`https://learning-server-lac.vercel.app/course/${params.id}`)
            },
            {
                path:  '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({params})=> fetch(`https://learning-server-lac.vercel.app/course/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);