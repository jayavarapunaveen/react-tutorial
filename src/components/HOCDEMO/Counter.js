
import React from 'react';
import HOCCounter from './HOCCounter';
class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }

}

export default HOCCounter(Counter);