import React from 'react'
import AddStudent from './AddStudent'
import Student from './Student'

class Students extends React.Component{
    state = {
        students:[
            {id: 1, name: 'simon'},
            {id: 2, name: 'keysi'},
            {id: 3, name: 'luwam'}
        ], 
        isVisible: true
    }
    showHide = ()=>{
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    deleteById = (id)=>{
        const copyStudents = [...this.state.students]
        let res= copyStudents.filter(std=> id!==std.id)
        this.setState({students: res})
    }
    addStd = (e)=>{
        const [name, value] = e.target.value
        // const name = e.target.value
        this.setState({
           students: [...this.state.students, name]

        })
    }
    render(){
        
      let students = null;
      if(this.state.isVisible){
        students = (
            this.state.students.map(item=>{
             return (
                 
                    <Student id= {item.id} name= {item.name} 
                    delete ={<button onClick={(std)=>this.deleteById(item.id)}>Delete</button>}
                    
                    >
                    </Student>
               
             ) 
            })
        )
      }
      return (
        <div>
            <button onClick={this.showHide}>ShowHide</button>  
      {students }
      <AddStudent students = {this.state.students}/>
      </div>
      )
    }
        
}
export default Students