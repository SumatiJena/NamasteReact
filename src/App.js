import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Restaurantmenu from "./Components/Restaurantmenu";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Errorpage from "./Components/Errorpage";



const Applist=()=>(

    <div className="App">
        <Header/>
        <Outlet/>
    </div>
 
)
const Approuter=createBrowserRouter([
    {
        path:"/",
        element:<Applist/>,
        children:[{
            path:"/",
            element:<Body/>
        },{
            path:"/about",
            element:<About/>
        },{
            path:"/contact",
            element:<Contact/>
        },{
            path:"/restaurant/:resid",
            element:<Restaurantmenu/>
        }],
        errorElement:<Errorpage/>
    }    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>)