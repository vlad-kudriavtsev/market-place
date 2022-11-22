import { lazy } from "react";
import { Navigate } from "react-router";
import App from "../App";


const HomePage = lazy(() => import("../pages/HomePage"))
const Authentication = lazy(() => import("../pages/Authentication"))
const Favourite = lazy(() => import("../pages/Favourite"))
const Basket = lazy(() => import("../pages/Basket"))



const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'auth',
                element: <Authentication />
            },
            {
                path: 'favourite',
                element: <Favourite />
            },
            {
                path: 'basket',
                element: <Basket />
            },
            {
                path: '*',
                element: <Navigate to='home'/>,
            }
        ]
    }
]

export default routes;