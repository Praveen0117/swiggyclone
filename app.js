import React from "react"; 
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./src/Header"
import Body from "./src/Body"
import RestaurantCard from "./src/RestaurantCard"
import About from "./src/About";
import Cart from "./src/Cart";
import Contact from "./src/Contact";
import Error from "./src/Error";
import RestaurantsInfo from "./src/RestaurantsInfo";
import Grocries from "./src/Grocries";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const AppLayout = () => {
    return(
        <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet />
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/cart",
                element:<Cart />,
                
            },
            {
                path:"/groceries",
                element:<Grocries />,
                
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantsInfo />
            }
        ], errorElement: <Error/>
    }, 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)