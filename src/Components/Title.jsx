import React from "react";


function Title( {text} ) {

    return (
        
        <h1>{!text ? "Your Signature" : text}</h1>
    )
}


export default Title;