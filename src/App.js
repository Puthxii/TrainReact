import React, {Component} from 'react';
import axios from 'axios';

class App extends Component{
  state = {
    users : []
  }
  
  componentDidMount(){
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response => this.setState({users: response.data.results})); 
  }


  
  render(){
    return(
      <div>
        { this.state.users.map(user => (
          <div>
              <div>{user.name.first}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
              <hr />
          </div>       
        ))}
      </div>
    )
  }
}


export default App;
