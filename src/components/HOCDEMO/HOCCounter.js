
import React from 'react';


const HOCCounter = OldComponent => {

    class NewComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }))
        }

        render() {
            return (
                <>
                    <p> Common view</p>
                    <OldComponent incrementCount={this.incrementCount} count={this.state.count} />

                </>)
        }
    }
    return NewComponent;
}


export default HOCCounter;

