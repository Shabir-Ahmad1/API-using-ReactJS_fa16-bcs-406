import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          flag:0
        };
  }
//// GET API ////////
  GetAPI=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
     
      this.setState({isLoaded:true,
                      items:response.data,
                      flag:1
                    })
    })
    .catch(error => {
      alert("error");
      console.log(error);
    })
  }
/////////////////////

////POST API//////////
PostAPI=()=>{
  var data = { title: 'foo', body: 'bar', userId: 1 };
  axios.post('https://jsonplaceholder.typicode.com/posts',data)
  .then(response => {
    console.log(response)
    this.setState({isLoaded:true,
                    flag:2
                  })
  })
  .catch(error => {
    alert(error);
    console.log(error);
  })

}
/////////////////////
  render() {

    const { error, isLoaded, items } = this.state;

    if (this.state.flag==1){

    return(
      <div>

      <button onClick={this.GetAPI}>
      Call for GET API
      </button>

      <button onClick={this.PostAPI}>
      Call for POST API
      </button>

      <h1> Result of GET API </h1>

      <ul>
           {items.map(item => (
             <li key={item.name}>
               {item.id} {item.title}
             </li>
           ))}
      </ul>

      </div>
);

    }
    
    else if (this.state.flag==2){

      return(
      <div>
      <button onClick={this.GetAPI}>
      GET API CALL
      </button>

      <button onClick={this.PostAPI}>
      POST API CALL
      </button>

      <h1> Request of Post Submitted!</h1>

      </div>

      );


    }
    else{

      return(
      <div>

      <button onClick={this.GetAPI}>
      GET API CALL
      </button>

      <button onClick={this.PostAPI}>
      POST API CALL
      </button>

      <h1> GET API RESULTS </h1>

      <ul>
           {items.map(item => (
             <li key={item.name}>
               {item.id} yes yes {item.body}
             </li>
           ))}
      </ul>

      </div>

      );

    }

  }

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      // alert(response)
      this.setState({isLoaded:true,
                      items:response.data})
    })
    .catch(error => {
      alert("error");
      console.log(error);
    })


    }
}

export default App;
