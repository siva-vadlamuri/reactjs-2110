import React,{Component} from 'react';

class Counter extends React.Component{
    // constructor(){
    //     super()
    //     console.log('Constructor called [Counter.js]')
    // }
    
   state= {
      count : 0,
      
     
   }
   handleIncremenent =()=>{
//  Never mutatate the state directly
    this.setState({count: this.state.count+1})
   }
   handleDecrement = ()=>{
       if(this.state.count>0){
        this.setState({count:this.state.count -1})
       }
       
   }
   handleReset = () =>{
       this.setState({count:0})
   }
   
    render(){

        return(
            <div>
                <p>Count : {this.state.count}</p>
                <button className="btn btn-info ml-2" onClick={this.handleIncremenent}>
                    Increment 
                </button>
                <button className="btn btn-info ml-2" onClick={this.handleDecrement}>
                    Decrement
                </button>
                <button className="btn btn-info ml-2" onClick={this.handleReset}>Reset</button>
                </div>
        )
    }
    
}
export default Counter;