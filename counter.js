import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props)
    this.state= {
        count:0
    }
  }
add(){
this.setState({
    count:this.state.count + 1
})
  }
  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={()=> this.add()}>add</button>
           </div>
    )
  }
}

export default Counter