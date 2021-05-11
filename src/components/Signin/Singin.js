
import React from 'react';

// state and props in class based component
class SignIn extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        signInInfo: {
          firstName: 'naveen',
          lastName: ''
        },
        registerInfo: {
          mobileNumber: '99448'
        }
      }
      console.log('sign in constructor', this.props.personName);
      this.submitHandle = this.submitHandle.bind(this);
      this.handleChange = this.handleChange.bind(this);
  
    }
    componentWillMount(){
      console.log('Sign IN component will mount fetch 2nd');
    }
  
    componentDidMount(){
      console.log('sign in comp did mount fetch 4th once all the childs were loaded');
    }
  
    submitHandle(event) {
      console.log(this.state);
      //a backend call happens
      localStorage.setItem('jwttoken','12345678');
    }
  
    handleChange(event) {
      let temp = {};
      temp[event.target.name] = event.target.value;
      //spread operator
      this.setState({
        signInInfo: {
          ...this.state.signInInfo,
          ...temp
        }
      });
    }
  
  
    render() {
      return (
        <div>
  
          <h1>Hello Sign {this.props.personName} </h1>
          <input type="text" name="firstName" value={this.state.signInInfo.firstName} onChange={this.handleChange} />
          <input type="text" name="lastName" value={this.state.signInInfo.lastName} onChange={this.handleChange} />
          <button onClick={this.submitHandle}>print</button>
        </div>
      );
    }
  }
export default SignIn;