import {Res_Menu} from "./Constant";
import { useState,useEffect } from "react";
const useRestoMenu=(resid)=>{
    const [restMenu, setRestMenu]=useState(null);
    useEffect(()=>{
        fetResMenu();
    },[])
    const fetResMenu=async()=>{
        const menu=await fetch(Res_Menu+resid);
        const jsonData=await menu.json();
        setRestMenu(jsonData?.data);
    }
    return restMenu;
}
export default useRestoMenu;
