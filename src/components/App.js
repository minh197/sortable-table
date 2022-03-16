import React from "react";
import Inventory from "./Inventory";
import Row from "./Row";

class App extends React.Component {
  state = {
    rows: {},
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
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="app-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.state.rows).map(key =>(
              <Row key={key}  details ={this.state.rows[key]}/>
              
              ) )}
            </tbody>
          </table>
        </div>
        <Inventory addRow={this.addRow} />
      </div>
    );
  }
}
export default App;
