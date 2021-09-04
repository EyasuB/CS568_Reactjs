import React from 'react'

function Student(props){
    return (
        <div>
            <p> {props.id} {props.name} {props.delete}</p>
            
        </div>
    )
}
export default Student