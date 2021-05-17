import React from 'react';
import { connect } from 'react-redux';
import { RESET_COUNT } from '../../redux/actions/action-types';
import './header.component.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }
    resetCount = () => {
        console.log('...')
        this.props.resetCount();
    }

    render() {
        return (<div className="header">
            hello this is naveen
            <span className="leftAli">{this.props.displayCount}</span>
            <button onClick={this.resetCount}>reset</button>

        </div>);
    }
}

const mapStoreToProps = ({ test1 }) => ({
    displayCount: test1.displayCount
})
const mapDispatchToProp = (dispatch) => ({
    resetCount: () => dispatch({ type: RESET_COUNT })
})

export default connect(mapStoreToProps, mapDispatchToProp)(Header);