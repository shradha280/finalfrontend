import React, {Component} from 'react';
import MainComponent from '../src/components/MainComponent';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
        loggedin: null
    }
}


  render(){
  return (
    <MainComponent />    

  );
}
}

export default App;