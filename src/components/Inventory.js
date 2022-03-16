import React from 'react'; 
import AddTableForm from './AddTableForm';
class Inventory extends React.Component{
    render(){
        return(
           <div className="inventory">
              <h2>Create New Row</h2>
              <AddTableForm addRow={this.props.addRow}/>
              
           </div>
        )
    }
}
export default Inventory;