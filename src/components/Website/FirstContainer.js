
import React from 'react';
import './FirstContainer.css';
import classNames from 'classnames';
class FirstContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }

    }

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }



    render() {
        return (<>
            <button onClick={this.toggleMenu}>Toggle Menu</button>
            <div className={classNames("side-bar", { "show-side-bar": this.state.showMenu })}>
                {/* <div className={`side-bar ${this.state.showMenu ? "show-side-bar" : ""}`}> */}
                <p>Hello this is naveen</p>
                <p>Welcome to my website</p>
            </div>
            <div >
                <h2 style={{ position: "absolute", top: "50%", color: "green", marginLeft: "30%" }}>MORE THAN 387,000 ENGAGED BY CHILDREN’S FEEDING</h2>
                <img style={{ width: "100%", height: 700 }} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />


            </div>
        </>);
    }

}


export default FirstContainer;
