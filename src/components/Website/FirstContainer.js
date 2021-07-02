
import React from 'react';
import './FirstContainer.css';
import classNames from 'classnames';
class FirstContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            currentIndex: 0,
            images: [{
                imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                text: "This is the first image"
            },
            {
                imgUrl: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
                text: "This is the second image"
            },
            {
                imgUrl: "https://www.awakenthegreatnesswithin.com/wp-content/uploads/2018/08/Nature-Quotes-1.jpg",
                text: "This is the third image"
            }]
        }

    }

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }
    changeSlide = (action) => {
        if (action == 'P') {
            this.setState({ currentIndex: this.state.currentIndex - 1 })
        } else if (action == 'N') {
            this.setState({ currentIndex: this.state.currentIndex + 1 })
        } else {
            this.setState({ currentIndex: action })
        }
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
                <button disabled={this.state.currentIndex == 0} style={{ position: "absolute", top: "50%", left: 0 }} onClick={() => this.changeSlide('P')}>P</button>
                <button disabled={this.state.currentIndex == this.state.images.length - 1} style={{ position: "absolute", top: "50%", right: 0 }} onClick={() => this.changeSlide('N')}>N</button>
                <div className="dot-container">
                    {this.state.images.map((obj, index) => {
                        return (<span className="dot" key={obj.imgUrl} onClick={() => this.changeSlide(index)}>&nbsp;&nbsp;&nbsp;</span>)
                    })}
                </div>
                <h2 style={{ position: "absolute", top: "50%", color: "green", marginLeft: "30%" }}>{this.state.images[this.state.currentIndex].text}</h2>
                <img style={{ width: "100%", height: 700 }} src={this.state.images[this.state.currentIndex].imgUrl} />


            </div>
        </>);
    }

}


export default FirstContainer;
