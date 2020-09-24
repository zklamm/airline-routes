import React, { Component } from "react";
import "./App.css";
import DATA from "./data";

class App extends Component {
  render() {
    const rows = DATA.routes.map((route, idx) => (
      <tr key={idx}>
        <td>{DATA.getAirlineById(route.airline).name}</td>
        <td>{DATA.getAirportByCode(route.src).name}</td>
        <td>{DATA.getAirportByCode(route.dest).name}</td>
      </tr>
    ));

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <td>Airline</td>
                <td>Source Airport</td>
                <td>Destination Airport</td>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;
