
import {createBrowserRouter} from "react-router-dom";
import type { RouteObject } from 'react-router';

import Root from "../Root/Root";
import Home from '../pages/Home/Home';


const router: RouteObject[] = [
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    }
]


export default createBrowserRouter(router);
