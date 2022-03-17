import React from 'react';
class EditRow extends React.Component{
    handleChange = (event) =>{
        //update the row 
        //1 take a copy of the current row
        const updatedRow = {
            ...this.props.row,
            [event.currentTarget.name]:event.currentTarget.value
        };
        this.props.editRow(this.props.index, updatedRow);
    }
    
    render(){
        return(
           <tr>
               <td>
                <input type="text" required placeholder='Name' name="name"/>
                </td>
               <td>
                <input  required placeholder='Price' name="price"/>
                </td>
               <td >
                   <select type="text" name="status">
                       <option>available</option>
                       <option>unavailable</option>
                   </select>
               </td>
               <td>
                <textarea type="text" placeholder='Description' name="desc"/>
                </td>
               <td>
                <input type="text" required placeholder='Image' name="image"/>
                </td>
               <td >
                   <button onSubmit ={this.handleChange}>Save</button>
               </td>
           </tr>
        )
    }
}
export default EditRow;