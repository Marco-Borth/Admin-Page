import React, {useState} from "react";
import axios from "axios";
import './LoginPage.css';

var text = "Passwords must be at least 6 characters long"
text += " and contain at least 2 of either: "

export class ChangePWPanel extends React.Component {
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
          <h4> Change Password </h4><hr/>
          <p style={textStyle}> {text} </p>
          {this.RuleList()}                    

          <div class="login-form">
            {this.PWField()}<br/>

            {this.UpdatePWButton()}
            {this.ReportError()}
          </div>
        </article>
      </div>
    );
  };

  RuleList() {
    return(
      <ul class="float-left">
        <li>One upper case letter</li>
        <li>One numeric character</li>
        <li>One Special character</li>
      </ul>  
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

  UpdatePWButton() {
    const linkStyle = { "color": "Blue"}

    return(
      <div class="Submit-Button">
          <button type="submit" class="btn btn-primary btn-block" onClick={this.handleClick}> Update Password </button><br/>
      </div>
    );
  }

  handleClick = () => {
    var creds;
    this.setState({ match: false });

    axios.get("http://localhost:5000/",  { crossdomain: true }).then(response => {
      creds = response.data;

      for (var i = 0; i < creds.length; i++) {
        if( ( (creds[i].email === this.state.usernameQuery) || (creds[i].phone_number === this.state.usernameQuery) ) 
          && creds[i].password === this.state.pwQuery ) {
          this.setState({ match: true });
          window.location.href = "http://localhost:3000/home"
        }
      }
    });

    if(this.state.match === null) {
      this.setState({ match: false });
    }
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