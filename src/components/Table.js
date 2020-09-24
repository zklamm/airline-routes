import React, { Component } from "react";

class Table extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      page: 0,
    };
  }

  nextPage = (e) => {
    e.preventDefault();
    this.setState({ page: this.state.page + 1 });
  };

  prevPage = (e) => {
    e.preventDefault();
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    const header = this.props.columns.map((col) => {
      return <th key={col.name}>{col.name}</th>;
    });

    const start = this.state.page * this.props.perPage;

    const rows = this.props.rows
      .slice(start, start + this.props.perPage)
      .map((row) => {
        return (
          <tr key={Object.values(row).join(":")}>
            {this.props.columns.map((col) => {
              const value = row[col.property];
              return (
                <td key={col.property + value}>
                  {this.props.format(col.property, value)}
                </td>
              );
            })}
          </tr>
        );
      });

    return (
      <div>
        <table className={this.props.className}>
          <thead>
            <tr>{header}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <div className="pagination">
          <p>
            Showing {start + 1}–{start + rows.length} of{" "}
            {this.props.rows.length} routes.
          </p>
          <p>
            <button onClick={this.prevPage} disabled={this.state.page === 0}>
              Previous Page
            </button>
            <button
              onClick={this.nextPage}
              disabled={start + rows.length >= this.props.rows.length}
            >
              Next Page
            </button>
          </p>
        </div>
      </div>
    );
  }
}

Table.defaultProps = {
  perPage: 25,
};

export default Table;
