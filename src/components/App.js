import React,{Fragment} from "react";
import Inventory from "./Inventory";
import Row from "./Row";
import TableHeader from "./TableHeader";
// import EditRow from "./EditRow";


class App extends React.Component {
   sortTypes = {
    up: {
      class: 'sort-up',
      fn: (a, b) => a.price - b.price
    },
    down: {
      class: 'sort-down',
      fn: (a, b) => b.price - a.price
    },
    default: {
      class: 'sort',
      fn: (a, b) => a
    }
  };
  
  state = {
    rows: {},
    currentSort:'default',

  };
  addRow = (row) => {
    //1 Take a copy of the existing state
    const rows = { ...this.state.rows };
    //2 add our new row to that rows variable
    rows[`row${Date.now()}`] = row;
    //set the new row object to state
    this.setState({
      rows,
    });
  };
  onSortChange =() =>{
    const {currentSort} = this.state; 
    let nextSort; 
    if (currentSort === 'down') nextSort = 'up';
    else if (currentSort === 'up') nextSort = 'default';
    else if(currentSort === 'default') nextSort = 'down';
    this.setState({
      currentSort:nextSort
    });
  }
  deleteRow = key => {
    //1. take a copy of state
    const rows = {...this.state.rows};
    //remove the row
    delete rows[key];
    //3. update state
    this.setState({rows});
  }
  editRow = (key, updatedRow) =>{
    //1 Take a copy of the current state
    const rows = {...this.state.rows};

    //2 update that state 
    rows[key] = updatedRow; 
    //3 set that to state
    this.setState({rows});
  }

  
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="app-container">
          <form>
          <table>
           <TableHeader  />
            <tbody>
              {Object.keys(this.state.rows).map(key =>(
              <Fragment>
              {/* <EditRow key={key} index={key} editRow={this.editRow}/> */}
              <Row key={key} index={key}   details ={this.state.rows[key]} deleteRow={this.deleteRow}/>
              </Fragment>
              ) )}
              
            </tbody>
          </table>
          </form>
        </div>
        <Inventory addRow={this.addRow} />
      </div>
    );
  }
}
export default App;
