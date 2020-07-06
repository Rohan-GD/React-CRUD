import React, {Component} from 'react'
class Tableform extends Component{
  state = {
    ...this.returnStateObject()
  }
  constructor(props){
    super(props)
    
    }
    returnStateObject()
    {
      if(this.props.currentIndex == -1)
      return {
        Fname: '',
        Lname: '',
        Age: '',
        PhNo: '',
        email: ''
      }
      else
      return this.props.list[this.props.currentIndex];
    }

  componentDidUpdate(prevProps){
    if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
    this.setState({...this.returnStateObject()})
  }
  
  HandleInputChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    });
  }
  HandleSubmit = e =>{
    e.preventDefault()
    this.props.onAddorEdit(this.state)

  }
  
  render(){
    return(
     <form onSubmit = {this.HandleSubmit} autoComplete = "off">
       <input name = "Fname" placeholder = "First Name" value = {this.state.Fname} onChange = {this.HandleInputChange}></input><br/>
       <input name = "Lname" placeholder = "Last Name" value = {this.state.Lname} onChange = {this.HandleInputChange}></input><br/>
       <input name = "Age" placeholder = "Age" value = {this.state.Age} onChange = {this.HandleInputChange}></input><br/>
       <input name = "PhNo" placeholder = "Phone no:" value = {this.state.PhNo} onChange = {this.HandleInputChange}></input><br/>
       <input name = "email" placeholder = "Email id" value = {this.state.email} onChange = {this.HandleInputChange}></input><br/>
       <button type = "submit">SUBMIT</button>

     </form>
    )
  }
}
export default Tableform