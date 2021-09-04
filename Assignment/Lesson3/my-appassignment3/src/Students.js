import React, {Component} from 'react'
import Student from './Student'

class Students extends Component{
    state = {
        name: 'Eyasu',
        age: 15
    }
makeOlder = ()=>{
    this.setState(prevObj=>{
       return {
           age: prevObj.age + 1
       }
    })
}
makeSmaller = ()=>{
    this.setState(prevObj=>{
       return {
           age: prevObj.age - 1
       }
    })
}
    render(){
        return (
        <div>
            <Student makeOlder = {this.makeOlder}
            makeSmaller = {this.makeSmaller}
            name = {this.state.name}
            age = {this.state.age}
        />
        </div>
    )
}
}
export default Students