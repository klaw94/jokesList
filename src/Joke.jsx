import React from "react"
import { useState } from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false) 

    function toggle(){
        setIsShown(previousValue => !previousValue)
    }

    return (
        <div>
            {/* This means basically if props setup exists print it in h3, otherwise skip*/}
            {props.setup &&  <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={toggle}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
            <hr />
        </div>
    )
}