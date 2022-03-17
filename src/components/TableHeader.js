import React from "react";
class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>
            Price
            {/* <button onClick={() => this.props.onSortChange()}></button> */}
          </th>
          <th>Status</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
    );
  }
}
export default TableHeader;
