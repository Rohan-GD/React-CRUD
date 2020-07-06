import React, {Component} from 'react'
import Tableform from './form';
class Tablelist extends Component{
  constructor(props){
    super(props)
    this.state={
      list: this.returnList(),
      currentIndex : -1
    }
  }
  returnList(){
    if(localStorage.getItem('details') == null)
    {
    localStorage.setItem('details',JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem('details'))

  }

  onAddorEdit= (data) =>{
    var list = this.returnList()// takes the data already existing in local storage
    if(this.state.currentIndex == -1)
    list.push(data) //adds new data to the existing one
    else
    list[this.state.currentIndex] = data
    localStorage.setItem(('details'),JSON.stringify(list))// adds new set of values to local storage
    this.setState({list: list})// updates the state
  }
  HandleEdit = index =>{
    this.setState({
      currentIndex : index
    })

  }
  render(){
    return(
      <div>
            <Tableform onAddorEdit = {this.onAddorEdit}
            currentIndex = {this.state.currentIndex}
            list = {this.state.list} />
            <hr/>
            <table>
              <tbody>
                {
                  this.state.list.map((item,index) => {
                    return <tr key = {index}>
                      <td>{item.Fname}</td>
                      <td>{item.Lname}</td>
                      <td>{item.Age}</td>
                      <td>{item.PhNo}</td>
                      <td>{item.email}</td>
                      <td><button onClick = {() =>this.HandleEdit(index)}>EDIT</button></td>

                    </tr>

                  })
                }
              </tbody>
            </table>
      </div>

    )
  }
}
export default Tablelist