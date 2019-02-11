import React from 'react';

function Button(props){
    return(
        <div className="button">
            <button onClick={props.onReset} type="button">Reset</button>
        </div>
    )
}

export default Button;