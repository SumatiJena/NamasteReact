import React from "react";
import UserCard from "./UserCard";
import Usercardclass from "./Usercardclass";
class About extends React.Component{
    constructor(){
        super()
        console.log("constructor called")
    }
    componentDidMount(){
        console.log("component Didmount called")
    }
    render(){
        console.log("render called")
        return(
            <>
            <h1>abhout us</h1>
            <div className="userDetails">
                <UserCard/>
                <Usercardclass name="Name:Sumati(class)"/>
            </div>
        </>
     )
    }
}
export default About;