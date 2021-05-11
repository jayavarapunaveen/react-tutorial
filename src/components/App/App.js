import './App.css';
import React from 'react';
import ChildCard from '../ChildCard/childcard.component';
import SignIn from '../Signin/Singin';



// what is parent ,child and siblings and how communication happens b/w then props and events?
// what are phase of life cycle hooks rendering and re rendering ?
// In what order life cycle hooks are called and when to call them?

// state and props in class based component
class App extends React.Component {

  constructor(props) {
    super(props);
    // if(!localStorage.getItem('jwttoken')){
    //  this.props.history.push('/signin');
    // }
    console.log('App comp constructor  ');
    this.state = {
      ownwerName: ""
    }
  }

  componentWillMount(){
    console.log('component fetch 2nd');
  }

  componentDidMount(){
    console.log('comp did mount fetch 4th once all the childs were loaded');
  }

  // ---- rendering

  componentWillUpdate(){
    console.log('comoonent will update')
  }

  shouldComponentUpdate(prevState){
    console.log(prevState);
    // compare
    return true;
  }

  componentWillUpdate(){
    console.log('comoonent did update')
  }

  componentWillUnmount(){
    console.log('jus before component dies');
  }


  // re rendering
  updateOwner(name) {
    console.log(name);
    this.setState({ownwerName:name});
  }

  render() {
    console.log('render')
    return (
      <div>

<SignIn/>
        Owner is {this.state.ownwerName}
        <ChildCard changeOwner={this.updateOwner.bind(this)} title="Naveen"  ownwerName={this.state.ownwerName}/>
        <ChildCard changeOwner={this.updateOwner.bind(this)} title="Anish" ownwerName={this.state.ownwerName}/>
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
