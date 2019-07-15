import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setUser } from "../../store/actions";
import Button from "../../component/button/index";

const inputStyle = {
  display: "block",
  height: 40,
  lineHeight: 40,
  fontSize: 14,
  border: "1px solid #e0e0e0",
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

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: this.props.user.Firstname || "",
      Lastname: this.props.user.Lastname || "",
      EmailAddress: this.props.user.EmailAddress || "",
      error1: "",
      error2: "",
      error3: "",
      error4: ""
    };
  }
  onSubmit() {
    let error1, error2, error3;
    if (!this.state.Firstname) {
      error1 = "Please enter First name";
    } else {
      if (!/^[a-zA-Z]*$/.test(this.state.Firstname)) {
        error1 = "First name only contains letter";
      } else {
        error1 = "";
      }
    }

    if (!this.state.Lastname) {
      error2 = "Please enter Last name";
    } else {
      if (!/^[a-zA-Z]*$/.test(this.state.Lastname)) {
        error2 = "Last name only contains letter";
      } else {
        error2 = "";
      }
    }
    if (!this.state.EmailAddress) {
      error3 = "Please enter email";
    } else {
      if (
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
          this.state.EmailAddress
        )
      ) {
        error3 = "Incorrect email format";
      } else {
        error3 = "";
      }
    }

    if (error1 || error2 || error3) {
      this.setState({
        error1,
        error2,
        error3
      });
      return;
    } else {
      this.setState({
        error1: "",
        error2: "",
        error3: ""
      });
    }
    this.props.setUser({
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      EmailAddress: this.state.EmailAddress
    });
    //alert("save success");
    this.props.history.push("/home/profile");
  }
  render() {
    console.log(this.props)
    return (
      <div style={{ padding: "5%" }}>
        { this.props.auth.auth? null: <Redirect to="/home/login" />}
        <form>
          <h1 style={{ textAlign: "center", marginBottom: 20 }}>Profile</h1>
          <input
            type="text"
            value={this.state.Firstname}
            style={inputStyle}
            placeholder="First name"
            onChange={e => this.setState({ Firstname: e.target.value })}
          />
          <p
            style={{
              fontSize: 12,
              color: "red",
              lineHeight: "20px",
              width: "30%",
              margin: "0 auto"
            }}
          >
            {this.state.error1}
          </p>
          <input
            type="text"
            value={this.state.Lastname}
            style={inputStyle}
            placeholder="Last name"
            onChange={e => this.setState({ Lastname: e.target.value })}
          />
          <p
            style={{
              fontSize: 12,
              color: "red",
              lineHeight: "20px",
              width: "30%",
              margin: "0 auto"
            }}
          >
            {this.state.error2}
          </p>
          <input
            type="text"
            value={this.state.EmailAddress}
            style={inputStyle}
            placeholder="Email"
            onChange={e => this.setState({ EmailAddress: e.target.value })}
          />
          <p
            style={{
              fontSize: 12,
              color: "red",
              lineHeight: "20px",
              width: "30%",
              margin: "0 auto"
            }}
          >
            {this.state.error3}
          </p>
          <Button
            onclick={e => {
              e.preventDefault();
              this.onSubmit();
            }}
            style={buttonStyle}
          >
            save
          </Button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  { setUser }
)(Settings);
