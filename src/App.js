import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./component/RestaurantCard";
import Header from "./component/header.js";
import Body from "./component/Body.js";
import About from "./component/About.js";
import Contact from "./component/Contacts.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import Error from "./component/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>

            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
