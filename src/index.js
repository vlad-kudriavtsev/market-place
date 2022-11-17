import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


import './index.css';
import routes from './routes';

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
    </Suspense>
);

