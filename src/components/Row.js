import React from 'react'; 
class Row extends React.Component{
    
    render(){
        return (
           <tr >
               <td>{this.props.details.name}</td>
               <td>{this.props.details.price}</td>
               <td>{this.props.details.status}</td>
               <td>{this.props.details.desc}</td>
               <td>{this.props.details.image}</td>
               <td>
                   <button onClick={() => this.props.deleteRow(this.props.index)}  type="button">
                    &times;
                   </button>
                   <button type="button">Edit</button>
               </td>
           </tr>
        )}
}
export default Row; 