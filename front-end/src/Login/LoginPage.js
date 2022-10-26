import React, {useState} from "react";
import axios from "axios";
import { HelpDeskURL } from "../Reusables/Elements";
import './LoginPage.css';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  
    this.state = {
      usernameQuery: "",
      pwQuery: "",
      match: null,
      showPW: false,
    }
  }

  render(){
    const textStyle = { "color": "Green" }

    const panelStyle = {
      "margin-left":"auto",
      "margin-right":"auto",
      "max-width": "500px"
    }
    return(
      <div class="card" style={panelStyle}>
        <article class="card-body">
          <h4> Sign in </h4><hr/>
          <p style={textStyle}> Sign in using either email or mobile # </p>

          <div class="login-form">
            {this.UsernameField()}<br/>

            {this.PWField()}

            <div class="checkbox float-left">
              <input type="checkbox"/> Remember Me
            </div><br/><br/>

            {this.LoginButton()}
            {this.ReportError()}
          </div>
        </article>

      </div>
    );
  };

  UsernameField() {
    return(
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="fa fa-user"/></span>
        </div>
        <input name="" class="form-control" placeholder="Email or Mobile #" type="string"
          onChange={(e) => this.setState({ usernameQuery: e.target.value })}
        />
      </div>
    )
  }

  PWField() {
    var feildType = "password"
    if(this.state.showPW) {
      feildType = "string"
    }

    return(
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="fa fa-lock"/></span>
        </div>
        <input name="" class="form-control" placeholder="password" type={feildType}
          onChange={(e) => this.setState({ pwQuery: e.target.value })}
        ></input>
        {this.PWToggleButton()}
      </div>
    )
  }

  PWToggleButton() {
    var icon = "bi bi-eye-slash"
    if(this.state.showPW) {
      icon = "bi bi-eye"
    }

    return(
      <div class="input-group-append">
        <span class="input-group-text" id="togglePassword">
          <i class={icon} id="togglePassword" onClick={this.handleToggle} />
        </span>
      </div>
    )
  }

  handleToggle = () => {
    this.setState({ showPW: !(this.state.showPW) });
  }

  LoginButton() {
    const linkStyle = { "color": "Blue"}

    return(
      <div class="Submit-Button">
          <button type="submit" class="btn btn-primary btn-block" onClick={this.handleClick}> Login </button>
          <a href="./forgot" class="btn float-left" style={linkStyle}> Forgot password? </a>
          <HelpDeskURL class="btn float-right"/>
      </div>
    );
  }

  handleClick = () => {
    this.setState({ match: null });

    var userName = this.state.usernameQuery;
    var pw = this.state.pwQuery;

    axios.post(
      "https://stage3.i-info.com/cpserver/Auth/api/authenticate",  
      { userName: userName, password: pw}
    ).then(response => {
        if(response.data.statusCode === 401) {
          this.setState({ match: false });
        } else if(response.data.token != null) {
          this.setState({ match: true });
          window.location.href = "http://localhost:3000/home"
        }
    })
  }

  ReportError() {
    var match = this.state.match;

    if(match === null) {
      return(null)
    } else if(!match) {
      const textStyle = { "color": "Red"}
      return(<p style={textStyle}>Error! No match can be found for the information entered.</p>)
    }
  }
}