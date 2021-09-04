import React, { Component } from 'react';
import Student from './Student';

class App2 extends Component {
    state ={
        students: [
            {name:"Eyasu", age: 37},
            {name:"Simon", age:36},
            {name:"Indrias", age:27}
        ],
    };
    incrementAge=()=>{
        const students = this.state.students;
        for(let student of students){
            student.age= student.age+=1;
        };
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default App2;