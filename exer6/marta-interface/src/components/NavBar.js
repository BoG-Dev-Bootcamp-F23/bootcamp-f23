import { useState } from "react";

export default function NavBar(props) {
  const { color, data } = props;
  const lineStations = data

  return (
    <div className="navbar-container">
      <p className="navbar-header">Select your starting station</p>
      <ul className="navbar-ul">
        <li>All Stations</li>
        {lineStations?.map((station) => {
          return <li>{station}</li>;
        })}
      </ul>
    </div>
  );
}
