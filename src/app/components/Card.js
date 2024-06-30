"use client"
import React from "react";

function Card( {children }) { //children is props for other pages
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card;