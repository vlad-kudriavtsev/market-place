import { lazy } from "react";
import { Navigate } from "react-router";
import App from "../App";


const HomePage = lazy(() => import("../pages/HomePage"))
const Products = lazy(() => import("../components/Products"))
const Authentication = lazy(() => import("../pages/Authentication"))



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
                path: 'phones',
                element: <div>hello</div>
            },
            {
                path: 'tv',
                children: <Products />
            },
            {
                path: '*',
                element: <Navigate to='home'/>,
            }
        ]
    }
]

export default routes;