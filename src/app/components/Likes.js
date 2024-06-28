"use client";

import React, {useState} from "react"
import Button from './Button'

function Likes() {

    //state variable
    const [count, setCount] = useState(0);

    //event handler
    const increment = () => {
        setCount(count+1);
    };


    return (
        <div>
            <Button onClick={increment}></Button>
            <p>Likes: {count}</p>
        </div>
    );
}

export default Likes;