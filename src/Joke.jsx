import React from "react"

export default function Joke(props) {
    return (
        <div>
            {/* This means basically if props setup exists print it in h3, otherwise skip*/}
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}