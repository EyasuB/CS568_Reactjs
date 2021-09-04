import React from 'react';
import ClassComp from './ClassComp'
import FuncCom from './FuncCom'
import ChildProp from './ChildProp'
import Student from './Student'
import Counter from './Counter'
export default class App extends React.Component {

state= {
  fname:'Eyasu',
  lName:'Gebrehiwot',
  count:0
}
increment =()=>{
  this.setState({
    count:this.state.count+1
  })
}
decrement =()=>{
  this.setState({
    count:this.state.count-1
  })
}
  render() { 
  return (

    <div className="App">
    <FuncCom firstName="Eyasu"></FuncCom>
      <ClassComp lastName="Gebrehiwot"></ClassComp>
      <ChildProp professor="Unubold Tumenbayar">This is Assignment submitted on github</ChildProp>
      <Counter increment={this.increment}
      decrement={this.decrement}
      counter= {this.counter}/>
      <Student/>
    </div>
  );
  }
}
