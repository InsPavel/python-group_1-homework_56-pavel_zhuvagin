import React from 'react';

function Counter(props){
    return(
        <div className="counter">
            <p>Счётчик: {props.counter}</p>
        </div>
    )
}

export default Counter;