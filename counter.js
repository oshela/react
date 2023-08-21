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
  sub(){
    this.setState({
        count: this.state.count -1
  })
  }
  render() {
    return (
      <div>
        <h1>quantity - {this.state.count}</h1>
        <button onClick={()=> this.add()}>add</button>
        <button onClick={()=> this.sub()}>Subscribe</button>
           </div>
    )
  }
}

export default Counter
