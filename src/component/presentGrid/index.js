import React from "react";
import Person from "./personIcon";
import Button from "../button/index";
import "./style.css";

const buttonStyle = {
  width: "30%",
  margin: "0 auto",
  display: "block",
  height: 40,
  fontSize: 14,
  border: "none",
  background: "#1890ff",
  color: "#fff"
};

export default function Grid({ type, activity, participants, onclick }) {

  function renderParticipants(participants) {
    let iconArray = [];
    for (let i = 0; i < participants; i++) {
      iconArray.push(i);
    }
    return (
      <div>
        {iconArray.map(icon => (
          <Person color="primary" width={20} key={icon} />
        ))}
      </div>
    );
  }
  return (
    <div className="container">
      <div className="one">
        <h2 className="gridTitle">Type</h2>
        <h2 style={{ margin: 20 }}>{type}</h2>
      </div>
      <div className="two">
        <h2 className="gridTitle">Participants</h2>
        {renderParticipants(participants)}
      </div>
      <div className="three">
        <h2 className="gridTitle">Activity</h2>
        <h2 style={{ margin: 20 }}>{activity}</h2>
      </div>
      <Button onclick={onclick} className="four" style={buttonStyle}>
        Refresh
      </Button>
    </div>
  );
}
