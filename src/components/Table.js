import React, { Component } from "react";
import DATA from "../data";

class Table extends Component {
  render() {
    const header = this.props.columns.map((col) => {
      return <th key={col.name}>{col.name}</th>;
    });

    const rows = this.props.rows.map((row, i) => (
      <tr key={i}>
        {this.props.columns.map((col, j) => (
          <td key={j}>
            {this.props.format(col.property, row[col.property]).name}
          </td>
        ))}
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>{header}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Table;
