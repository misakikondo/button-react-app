import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {name: 'who are you'};
  }

  render(){
    return (
  <div>
    <h1>{this.state.name}</h1>
    <button type="button" className="btn btn-primary" onClick={() => {this.setState({name:'Misaki'})}}>
     押してね
    </button>
    <button type="button" className="btn btn-primary" onClick={() => {this.setState({name:'Tanner'})}}>
     押してね
    </button>
  </div>
    )
  }


}

export default App