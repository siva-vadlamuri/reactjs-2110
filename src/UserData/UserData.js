import React, { Component } from 'react'

class UserData extends Component {
    constructor(){
      super();
    //   Do 
    // You can intilize the state 
    // dont 
    // We cannot make network calls 
        console.log('Constructor Called [UserData.js]')
    }
    state = {
        userData : []
    }
    getUserData = async() =>{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
    //   console.log(data);  
    return data;
    
    }
    componentDidMount(){
        console.log('Component Did Mount [UserData.js]');
       const data = this.getUserData()

    //    this.setState({userData: data})
    }
    render() {
        console.log('Render Method Called [UserData.js]')
        return (
            <div>
                <h2>User Data</h2>
                <table className="table">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </thead>
                    <tbody>
                        {
                            this.state.userData.map((user)=>(
                              <tr>
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.username}</td>
                                  <td>{user.email}</td>
                                  <td>{user.address.city}</td>
                                  </tr>  
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserData
