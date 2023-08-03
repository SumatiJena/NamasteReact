import React from "react";

class Usercardclass extends React.Component{
    constructor(props){
    super(props);
    this.state={
        count:0,
    };
    console.log("2nd constructor called");
    }
    componentDidMount(){
        console.log("2nd chilscomponent didmount called");
    }
    render()
    {
        console.log("2nd render called");
        const {count}=this.state;
        return(
            <div className='usercards'>
            <h3>{count}</h3>
            <button onClick={()=>this.setState({
                count:this.state.count+1
            })
            }> click </button>
            <h3>{this.props.name}</h3>
            <h3>location:Odisha</h3>
            <h3>branch:Banglore</h3>
        </div>
        )
    }
}
export default Usercardclass;