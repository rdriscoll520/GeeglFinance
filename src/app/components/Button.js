import React from "react";

function Button ({onClick, children}) {
    return (
        <button className="owenbutton" onClick = {onClick}> 
        {children} owen button
        </button>
    );
}
export default Button;