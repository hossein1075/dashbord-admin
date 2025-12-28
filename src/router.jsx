import Comments from "./Pages/Comments";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Task from "./Pages/Task";
import Users from "./Pages/Users";
import Login from "./Pages/Login";
import AuthLayouts from "./Layouts/AuthLayouts";
import MainLayouts from "./Layouts/MainLayouts";

let routes = [
    {element: <AuthLayouts/>,
        children: [
            { path: '/login', element: <Login/>},
        ]
    },
    {element: <MainLayouts/>,
        children: [
            { path: '/', element: <Home/>},
            { path: '/home', element: <Home/>},
            { path: '/comments', element: <Comments/>},
            { path: '/products', element: <Products/>},
            { path: '/users', element: <Users/>},
            { path: '/task', element: <Task/>}
        ]
    }
]

export default routes