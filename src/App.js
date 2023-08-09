import React, { lazy, Suspense, useEffect, useState } from "react";
import  ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Restaurantmenu from "./Components/Restaurantmenu";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Errorpage from "./Components/Errorpage";
import Usercontext from "../utils/usercontext";

const Grocery=lazy(()=>import("./Components/Grocery"));

const Applist=()=>{
    const [userName, setUserName]=useState( );
    useEffect(()=>{
         const data={
            name:"sumati",
        };
        setUserName(data.name);
    },[]);
    
    return( <div className="App">
        <Usercontext.Provider value={{loggedinuser:userName,setUserName}}>
            <Header/>
            <Outlet/>
         </Usercontext.Provider>
    </div>
    )
}

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
        },{
            path:"/grocery",
            element:<Suspense fallback={<h1>Grocery page loading</h1>}><Grocery/></Suspense>
        }],
        errorElement:<Errorpage/>
    }    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>)