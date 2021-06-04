
import React from 'react';
import './Singin.css';
import { connect } from 'react-redux';
import  {updateCount}  from '../../redux/actions/testaction';
// state and props in class based component
class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  
      signInInfo: {
        firstName: 'naveen',
        lastName: '',
        errors: {
          firstName: null,
          lastName: null
        }
      },
      registerInfo: {
        mobileNumber: '99448'
      }
    }
    console.log('sign in constructor', this.props.personName);
    this.submitHandle = this.submitHandle.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  componentWillMount() {
    console.log('Sign IN component will mount fetch 2nd');
  }

  componentDidMount() {
    console.log('sign in comp did mount fetch 4th once all the childs were loaded');
  }

  submitHandle(event) {
    console.log(this.state);
    //a backend call happens
    this.props.updateCount(parseInt(this.state.signInInfo.firstName));
    localStorage.setItem('jwttoken', '12345678');
  }

  handleChange(event) {

    const { name, value } = event.target;
    let err = { ...this.state.signInInfo.errors }
    switch (name) {
      case 'firstName':
        if (value.length > 20) {
          err[name] = true;
        } else {
          err[name] = false;
        }
        break;
      default:
        break;
    }
    console.log(err)
    //spread operator
    this.setState({
      signInInfo: {
        ...this.state.signInInfo,
        ...{ errors: err },
        ...{ [name]: value }
      }
    });
  }


  render() {
    return (
      <div>

        <h1>Products count {this.props.productsCount} </h1>
        <input type="text" name="firstName" value={this.state.signInInfo.firstName} onChange={this.handleChange} />
        {this.state.signInInfo.errors.firstName ? <span>firstName Is invalid</span> : null}
        <input type="text" name="lastName" value={this.state.signInInfo.lastName} onChange={this.handleChange} />
        <button onClick={this.submitHandle}>print</button>
      </div>
    );
  }
}
const mapStoreToProps = ({ test1 ,cart}) => ({
  displayCount: test1.displayCount,
  productsCount: cart.cartItems.length
})
function MapToProps(dispatch) {
  return ({ updateCount: (countToUpdate) => dispatch(updateCount(countToUpdate)) })

}

export default connect(mapStoreToProps, MapToProps)(SignIn);