import './App.css';
import React from 'react';

// state and props in class based component
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: 'naveen',
      lastName: ''

    }
    console.log('class is created', this.props.personName);
    this.printName = this.printName.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  printName(event) {
    console.log(this.state);
  }

  handleChange(event){
    let temp = {};
    temp[event.target.name] = event.target.value;
    //spread operator
    this.setState({
      ...temp
    });
  }


  render() {
    return (
      <div>

        <h1>Hello {this.props.personName} </h1>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <button onClick={this.printName}>print</button>
      </div>
    );
  }
}



// function App(props) {
//   return (
//     <div className="App">
//      Hello {props.personName}
//     </div>
//   );
// }

export default App;
