import React from "react";
import  ReactDOM from "react-dom/client";
const Title=()=>(
 <h1>this is title</h1>
)
const Heading=()=>{
    return <div>
        <Title/>
        <h1>This is heading for jsx</h1>
    </div>
}
   
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)