import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./component/RestaurantCard";
import  Header from "./component/header.js";
import Body from "./component/Body.js";
import { createBrowserRouter } from "react-router-dom";
import About from "./component/About.js"




const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
    },
    {
        path:"/about",
        element:<About/>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);