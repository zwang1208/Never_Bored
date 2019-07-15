import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../component/button/index";

const inputStyle = {
  display: "block",
  height: 40,
  lineHeight: "40px",
  fontSize: 14,
  width: "30%",
  margin: "0 auto",
  marginBottom: 10,
  padding: "0 15px"
};
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

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      EmailAddress: ""
    };
  }
  settings = () => {
    this.props.history.push("/home/settings");
  };
  render() {
    const { user } = this.props;
    return (
      <div style={{ padding: "5%" }}>
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>Profile</h1>
        <div style={inputStyle}>First name: {user.Firstname}</div>
        <div style={inputStyle}>Last name: {user.Lastname}</div>
        <div style={inputStyle}>Email: {user.EmailAddress}</div>
        <Button onclick={this.settings} style={buttonStyle}>Go to settings</Button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  {}
)(Profile);
