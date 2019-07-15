import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { login } from "../../store/actions";
import Button from '../../component/button/index'

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

class Login extends Component {

    handleLogin = () =>{
        this.props.login({auth: true})
    }
    render() {
        if(this.props.auth.auth) {
            return <Redirect to="/home/settings"/>
        }
        return(
            <div style={{padding:"5%"}}>   
                <Button onclick={ this.handleLogin } style={buttonStyle}>
                    Sign in
                </Button>
            </div>
        )
    }
}

export default connect(
    state => state,
    { login }
  )(Login);
