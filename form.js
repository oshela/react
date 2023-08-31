import React, { Component } from 'react'

  class Form extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            Comments:'',
            topic:'react'
        }
    }
    //class property for handling event change 
    //once you assign a handler to an onchange event the even itself is passed
    //as a parameter to the handler
    handleForm = (event)=>{
        this.setState({
            email:event.target.value
        })
        
    }
    handleComments =(event)=>{
        this.setState({
            comments:event.target.value 
        })
    }
handleTopic = (event)=>{
    this.setState({
        topic:event.target.value
    })
    console.log(this.state.topic)
}
handleSubmit=(event)=>{
    alert(`${this.state.email} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
}
  render() {
    //destructuring the states so we can use the names without this.state method
    const{email, comments, topic} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                Username:
            </label>
            <input placeholder="Enter User Name" 
            onChange={this.handleForm} type='text'
             value={email}/>
             <div>
                <label>Comments</label>
                <textarea value={comments} 
                onChange={this.handleComments}></textarea>
             </div>
             <div>
                <label>Topic:</label>
                <select value={topic} onChange={this.handleTopic}>
                    <option value='react'>React</option>
                    <option value='PHP'>PHP</option>
                    <option value='Mysql'>Mysql</option>
                </select>
             </div>
             <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
