import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Header from "../../Pages/Shared/Header/Header";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path:'/courses',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
]);