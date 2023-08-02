import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ViewJobs from "../Pages/ViewJobs/ViewJobs";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: 'signUp',
                element: <Register></Register>
            },
            {
                path: '/jobs',
                element: <ViewJobs/>
            },
            {
                path: '/profile',
                element: <Profile/>
            }

        ]
    }
])

export default router