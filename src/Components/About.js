import React, {useEffect}from "react";
import UserCard from "./UserCard";
import Usercardclass from "./Usercardclass";
import { useEffect } from "react";

const About=()=>{
    useEffect(() => {
       const timer= setInterval(()=>{
            console.log("component mount")
        },5000);
      return () => {
        clearInterval(timer)
        console.log("component unmount")
      }
    }, [])
    
    return(
        <>
        <h3>About Us Page</h3>
        </>
    )
}


// Class based component
//class About extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             userData:{}
//         }
//         console.log("constructor called");
//     }
//     async componentDidMount(){
//         const data=await fetch("https://api.github.com/users");
//         const jsondata=await data.json();
//         this.setState({userData:jsondata});
        
//     }
//    componentDidMount(){
//     this.timer=setInterval(()=>{
//         console.log("componentDidmount");
//     },1000)
//    }
//    componentWillUnmount(){
//     clearInterval(this.timer);
//     console.log("component will unmount called");
//    }
//     render(){
//         console.log(this.state.userData);
//         console.log("render called")
//         return(
//             <>
//             <h1>abhout us</h1>
//             <div className="userDetails">
//                 <UserCard/>
//                 <Usercardclass name="Name:Sumati(class)"/>
//             </div>
//         </>
//      )
//     }
//}
export default About;