import React, {Component} from 'react';
import axios from 'axios';
import Loading from './components/Loading';

class App extends Component{
  state = {
    users : [],
    loading: true
  }
  
  componentDidMount(){
    setTimeout(() =>{
      axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        this.setState({
          users: response.data.results,
          loading:  false
        })
      })
    },10)
   
  }
  
  render(){
    return(
      <div>
        { (!this.state.loading) ? this.state.users.map(user => 
          <div>
              <div>{user.name.first}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
              <hr />
          </div>       
        ) : <Loading message="Loading..." title="..." >Please wait</Loading>
        }
      </div>
    )
  }
}


export default App;
