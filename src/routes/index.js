import { lazy } from "react";
import { Navigate } from "react-router";
import App from "../App";


const ProductsCatalog = lazy(() => import("../pages/ProductsCatalog"))
const Authentication = lazy(() => import("../pages/Authentication"))
const Favourite = lazy(() => import("../pages/Favourite"))
const Basket = lazy(() => import("../pages/Basket"))
const Phones = lazy(() => import("../pages/Phones"))
const Televisions = lazy(() => import("../pages/Televisions"))



const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'products',
                element: <ProductsCatalog />,
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
                path: 'phones',
                element: <Phones />
            },
            {
                path: 'televisions',
                element: <Televisions />
            },
            {
                path: '*',
                element: <Navigate to='products'/>,
            }
        ]
    }
]

export default routes;