import React from 'react'

function Student(props){
    return (
        <div>
        <hr/>
        <h4>This is student {props.name} and Your Age is: {props.age} </h4>
        <h1>{props.count}</h1>
        <button onClick={props.makeOlder }>MakeAgeOlder</button>
        <button onClick={props.makeSmaller }>MakeAgeSmaller</button>
        </div>
    )
}
export default Student
