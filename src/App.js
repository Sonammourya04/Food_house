import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./component/RestaurantCard";
import  Header from "./component/header.js";
import Body from "./component/Body.js";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);