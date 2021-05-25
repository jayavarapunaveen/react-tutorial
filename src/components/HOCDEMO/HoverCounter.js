
import React from 'react';
import HOCCounter from './HOCCounter';
class HoverCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button onMouseOver={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }

}

export default HOCCounter(HoverCounter);