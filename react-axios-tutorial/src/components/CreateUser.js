import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
constructor(props){
    super(props)
    this.onChangeUserName=()=>{ this.onChangeUserName()};
    this.onChangeUserEmail=()=> {this.onChangeUserEmail()};
    this.onSubmit= ()=>{this.onSubmit()};
    this.state={
        name:'',
        email:''
    }
}

onChangeUserName(e){
    this.setState({name:e.target.value})
}
onChangeUserEmail(e){
    this.setState({email:e.target.value})
}
onSubmit(e){
    e.preventDefault();
    const userObject={
        name:this.state.name,
        email:this.state.email
    };

axios.post('http://localhost:4000/users/create', userObject)
    .then((res)=>{
        console.log(res.data)
    }).catch((error)=>{
        console.log(error)
    })
    this.setState({name:'', email:''})
}
componentDidMount(){
    
}
    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Email</label>
                        <input type="text"value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>

        );
    }
}

