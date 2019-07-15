import React, { Component } from "react";
import axios from "axios";
import Button from "../../component/button/index";

let imgUrl = require("../../assets/background.jpg");
let background = {
  backgroundImage: "url(" + imgUrl + ")",
  backgroundSize: "cover",
  overflow: "hidden",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-around"
};

const buttonStyle = {
  width: "15%",
  margin: "0 auto",
  display: "block",
  height: 40,
  fontSize: 14,
  border: "none",
  background: "#1890ff",
  color: "#fff"
};

class SliderShow extends Component {
  constructor() {
    super();
    this.state = {
      activity: ""
    };
  }

  callBored = async () => {
    let res = await axios.get("https://www.boredapi.com/api/activity");
    this.setState({ activity: res.data.activity });
  };

  jumpToHome = () => {
    this.props.history.push("/home");
  };

  componentDidMount() {
    let intervalId = setInterval(() => {
      this.callBored();
    }, 1500);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div style={background}>
        <h1>Feeling Bored?</h1>
        {this.state.activity? <h1>{this.state.activity}</h1>: <h1>Loading...</h1>}
          <Button onclick={this.jumpToHome} style={buttonStyle}>Explore</Button>
      </div>
    );
  }
}

export default SliderShow;
